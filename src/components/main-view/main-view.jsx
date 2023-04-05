import { useEffect, useState } from "react";
import { MovieView } from "../movie-view/movie-view";
import { MovieCard } from "../movie-card/movie-card";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view"
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { ProfileView } from "../profile-view/profile-view";
import { Row, Col } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser? storedUser : null);
  const [token, setToken] = useState(storedToken? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  const updateUser = user => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
} 

  // useEffect hook allows React to perform side effects in component e.g fetching data
  useEffect(() => {
    if (!token) {
      return;
    }
    // set loading before sending API request
    setLoading(true);
    fetch("https://mycinema.herokuapp.com/movies", {
      headers: {Authorization: `Bearer ${token}`}
    })
    .then(resonse => resonse.json())
    .then(movies => {
        const moviesFromAPI = movies.map(movie => {
            return {
                id: movie._id,
                title: movie.Title,
                description: movie.Description,
                genre: movie.Genre.Name,
                director: movie.Director.Name,
                image: movie.imageUrl
            };
        });
        setMovies(moviesFromAPI);
    });
}, [token]);

return (
    <BrowserRouter>
        <NavigationBar
            user={user}
            onLoggedOut={() => {
                setUser(null);
                setToken(null);
                localStorage.clear();
            }}
        />
        <Row className="justify-content-center">
            <Routes>
                <Route
                    path="/signup"
                    element={
                        <>
                            {user ? (
                                <Navigate to="/" />
                            ) : (
                                <Col md={6}>
                                    <SignupView />
                                </Col>
                            )}
                        </>
                    }                    
                />
                <Route
                    path="/login"
                    element={
                        <>
                            {user ? (
                                <Navigate to="/" />
                            ) : (
                                <Col md={6}>
                                    <LoginView
                                        onLoggedIn={(user, token) => {
                                            setUser(user);
                                            setToken(token);
                                        }}
                                    />
                                </Col>
                            )}
                        </>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        !user ? (
                            <Navigate to="/login" replace />
                        ) : (
                            <ProfileView user={user} token={token} movies={movies} onLoggedOut={() => {
                                setUser(null);
                                setToken(null);
                                localStorage.clear();
                            }} updateUser={updateUser}/>
                        )
                    }
                />
                <Route
                    path="/movies/:movieId"
                    element={
                        <>
                            {!user ? (
                                <Navigate to="/login" replace />
                            ) : movies.length === 0 ? ( 
                                <Col>The list is empty</Col>
                            ) : (
                                <MovieView movies={movies} user={user} token={token} updateUser={updateUser}/>
                            )}
                        </>
                    }
                />
                <Route
                    path="/"
                    element={
                        <>
                            {!user ? (
                                <Navigate to="/login" replace />
                            ) : movies.length === 0 ? ( 
                                <Col>The list is empty</Col>
                            ) : (
                                <>
                                    {movies.map(movie => (
                                        <Col className="mb-4" key={movie.id} xl={2} lg={3} md={4} xs={6}>
                                            <MovieCard movie={movie} />
                                        </Col>
                                    ))}
                                </>
                            )}
                        </>
                    }
                />
            </Routes>
        </Row>
    </BrowserRouter>
);
};