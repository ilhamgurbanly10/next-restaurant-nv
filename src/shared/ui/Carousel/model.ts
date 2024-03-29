import { useState, useEffect, useMemo} from 'react';
import { ModelReturnProps } from './type';

const useModel = (length: number, infinite: boolean, autoplay:boolean, autoplaySpeed: number, pauseOnHover: boolean): ModelReturnProps  => {

  const [key, setKey] = useState<number>(0);
  const [isHover, setIsHover] = useState<boolean>(false);
  
  const next = (): void => {
    if (key < length) setKey(key + 1);
    else if (infinite) setKey(0);
  }

  const prev = (): void => {
    if (key !== 0) setKey(key - 1);
    else if (infinite) setKey(length);
  }

  const nextDisabled = useMemo<boolean>(() => {
    return key === length && !infinite ? true : false;
  }, [key])

  const prevDisabled = useMemo<boolean>(() => {
    return key === 0 && !infinite ? true : false;
  }, [key])

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (autoplay) !pauseOnHover ? next() : !isHover ? next() : null;
    }, autoplaySpeed);
    return () => clearTimeout(timeout);
  }, [key, isHover]);

  return {
    key, 
    next,
    prev,
    setIsHover,
    nextDisabled,
    prevDisabled
  };

};

export default useModel;

