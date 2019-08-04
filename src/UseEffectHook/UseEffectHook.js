import React, {useEffect, useState} from 'react'
import {getJoke} from '../utils'

export const UseEffectHook = () => {
   const [joke, setJoke] = useState()

   useEffect(() => {
    const fetchData = async () => {
      const result = await getJoke()

      setJoke(result.value);
    };

    fetchData();
  }, []);

   return <div data-testid="joke">{joke}</div>
}