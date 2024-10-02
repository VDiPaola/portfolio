import { createSlice } from '@reduxjs/toolkit';
import { Language } from '../../Helpers/Enums/UserEnums';
import { SettingsType } from '../../Helpers/Types/SettingsTypes';



const initialState: SettingsType = {
  isDarkMode: true,
  language: Language.ENGLISH,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setDarkMode: (state, action) => {
            state.isDarkMode = action.payload as boolean;
        },
        setLanguage: (state, action) => {
            state.language = action.payload as Language;
        }

    }
})


export const {setDarkMode, setLanguage} = userSlice.actions;
export default userSlice.reducer;