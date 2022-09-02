import React, { useCallback, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { keywordAction } from '../redux/features/keywordSlice';

const SearchMiddle = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchingRef = useRef(null);
  const [isFocus, setIsFocus] = useState(false);

  const handleSearchingOut = (e: React.MouseEvent) => {
    if (e.target === searchingRef.current) {
      navigate('/');
    }
  };

  const handleFocus = useCallback(() => {
    setIsFocus(true);
  }, []);

  const handleFocusOut = useCallback(() => {
    setIsFocus(false);
  }, []);

  const handleKeyword = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const keyword = e.target.value;
      dispatch(keywordAction({ keyword: keyword }));
      navigate(`/keword`);
    }
  };
  return (
    <>
      <div
        className={`flex border-[1px] bg-[#FCFCFC] border-matchgi-gray h-[44px] rounded-[12px] items-center p-[5px] ${
          isFocus ? 'border-[#797CD4] border-[2px]' : ''
        }`}
      >
        <input
          type='text'
          placeholder=' 제목, 내용으로 검색'
          className='flex-1 outline-0 bg-[#FCFCFC] ml-2'
          onFocus={handleFocus}
          onBlur={handleFocusOut}
          onKeyPress={handleKeyword}
          autoFocus
        />
        <img src='/assets/images/search.svg' alt='search-icon' className='w-[24px] h-[24px] mx-[10px]' />
      </div>
      <div className='w-[100%] h-[90vh] bg-[#FCFCFC]' ref={searchingRef} onClick={handleSearchingOut}></div>
    </>
  );
};

export default SearchMiddle;
