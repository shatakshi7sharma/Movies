import React, { useEffect, useState } from 'react';
import TextField from "@mui/material/TextField";
import './App.css';
import axios from "axios";
import {
    BottomContainer, Card,
    CardAtTop, Label1, MarginDiv,
    SearchHeading, StyledContainer
} from './style';

export default function NominateMovies() {

    const [movieData, setMovieData] = useState(null);
    const [inputEntered, setInputEntered] = useState(null)
    const [nominate, setNominate] = useState(true);
    const [isChange, setChange] = useState(true);


    const getMoviesData = async () => {
        try {
            let response = await axios(`https://www.omdbapi.com/?apikey=46b3ca1e&s=${inputEntered}`);
            setMovieData(response.data.Search)
            console.log("http://www.omdbapi========>>", response.data.Search)

        } catch (error) {
            console.log(error)

        }


    }
    console.log("movieData=====>>>>", movieData)


    useEffect(() => {
        if (inputEntered) {
            getMoviesData();

        }

    }, [inputEntered])


    const height = {
        height: "1rem"
    }

    function movieTitle(label) {

        const handleNominate = (val) => {
            return () => {

                val.isNominated = !val.isNominated

                // setMovieData(movieData.map(m => m))
                console.log(val);
                setChange(!isChange)
            }
        }

        const Nominate = label === ("Nominate" || "Remove") ? false : true;

        return (<div style={{ display: "flex", flexDirection: "column", }}>

            {movieData && movieData.filter(movie => Nominate ? movie.isNominated : true).map((val, index) => (


                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "6px"
                }}>
                    <div style={{
                        display: "flex", color: "black", fontSize: "18px", maxWidth: '50%'
                    }}>
                        <p>{val && val.Title}</p>

                    </div>
                    <Label1 diabled={val.isNominated} color={Nominate} onClick={handleNominate(val)}>

                        {!Nominate && <p >{!val.isNominated ? "Nominate" : "Nominated"}</p>}
                        {Nominate && <p >{'Remove'}</p>}

                    </Label1>
                </div>
            ))
            }
        </div>


        )

    }


    const onChange = (event) => {
        setInputEntered(event.target.value);
    }

    return (
        <StyledContainer>
            <MarginDiv>

                <CardAtTop>

                    <SearchHeading>{"Movies"}</SearchHeading>
                    <div style={{ height: "8px" }} />
                    <TextField
                        id="Title"
                        variant="outlined"
                        fullWidth
                        label="Search"
                        onChange={onChange}
                    />

                </CardAtTop>


                <div style={height} />

                <BottomContainer>

                    <Card>
                        <SearchHeading>{`Results for :${inputEntered || ''}`}</SearchHeading>


                        {nominate && <SearchHeading> {movieTitle("Nominate")}</SearchHeading>}

                    </Card>


                    <Card>
                        <SearchHeading>{"Nominations"}</SearchHeading>
                        <SearchHeading> {movieTitle("Nominated")}</SearchHeading>
                    </Card>

                </BottomContainer>

            </MarginDiv>
        </StyledContainer >
    )
}
