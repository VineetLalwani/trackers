import React, { useState,useEffect } from 'react';
import { NativeSelect, FormControl, StylesProvider } from '@material-ui/core';


//import styles from './CountryPicker.module.css';

import { fetchCountries } from '../../api';

const CountryPicker = ( { handleCountryChange }) => {

    const [fetchedCountries, setFetchedCountries ] = useState([]);

    useEffect(()=> {
        const fetchAPI = async () => {
            setFetchedCountries (await fetchCountries());
        }

        fetchAPI();
    }, [setFetchedCountries]);

    //console.log(fetchedCountries);

    return(
        <FormControl className={StylesProvider.formControl}>
            <NativeSelect defaultValue="India" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value= "">GloBal</option>
                {fetchedCountries.map((country, i) => <option key={i} value= { country }>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;