import { createContext ,useContext} from 'react';




export const ThemeContext= createContext ({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{},

})

export const ThemeProvider =ThemeContext.Provider 

// custom hooks
export default function useTheme(){
    return useContext(ThemeContext);
}//now you dont need multiple import to import same file