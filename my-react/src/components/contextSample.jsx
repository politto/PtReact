import { useState, useEffect, createContext, useContext } from "react";

const TeamContext = createContext()

export const TeamProvider = (children) => {
    const [team, setTeam] = useState(["manU", "mancity", "lierpool"]);
    return (
        <TeamContext.Provider value={{ team, setTeam }}>
            <Children value={{team, setTeam}}></Children>
        </TeamContext.Provider>
    )
}

const Children = (value) => {
    const team = useContext(TeamContext);
    return (
        <>
            {console.log(team.team[0])}
            {team.team[1]}
            Where is it?
        </>
    )
}