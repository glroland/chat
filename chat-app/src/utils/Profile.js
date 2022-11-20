const SESSION_ID_NAME = "playerName";

export function setPlayerName(playerName) 
{
    console.log("Attempting to set Player Name value: " + playerName);
    if ((typeof playerName === 'string') || (playerName instanceof String))
    {
        console.log("Player Name = " + playerName);
        sessionStorage.setItem(SESSION_ID_NAME, playerName);
    }
    else
    {
        console.log("Input value passed in for player name is not a string!  " + playerName);
    }
}

export function getPlayerName() 
{
    return sessionStorage.getItem(SESSION_ID_NAME);
}

export function isLoggedIn()
{
    const playerName = getPlayerName();
    if ((playerName === undefined) || (playerName === null))
    {
        console.log("Player not logged - name is not defined or is null");
        return false;
    }
    if (!((typeof playerName) == 'string'))
    {
        console.log("Unknown data type for player Name - " + (typeof playerName));
        return false;
    }

    return (playerName.length > 0);
}
