"use client"

import React from "react";
import { Product } from "@/types/index"
import { FormEvent, useState } from 'react'
import { searchScraper } from "@/redux/actions/searchScraper";
import { AppDispatch } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

interface SearchbarProps {
  products: Product[];
}

const Searchbar: React.FC<SearchbarProps> = ({ products }) => {
  const dispatch = useDispatch<AppDispatch>();  
  const [searchPrompt, setSearchPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false); 
  const { payload } = useSelector((state:any) => state.searchProducts) 

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = {
      website: "amazon",
      search_query: searchPrompt
    }

    try {
      setIsLoading(true);
      const fetchedProducts = await searchScraper(formData, dispatch).then((response) => {
        products(payload)
      })
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }  
  }

  return (
    <form className="flex flex-wrap gap-4 mt-12" 
    onSubmit={handleSubmit}
    >
        <input 
        type="text" 
        placeholder="Enter product name"
        onChange={(e) => setSearchPrompt(e.target.value)}
        className="searchbar-input"
        value={searchPrompt}
        />
        
        <button 
        type="submit" 
        className="searchbar-btn"
        disabled={searchPrompt == ''}> 
            {isLoading ? 'Searching...' : 'Search'}
        </button>
    </form>
  )
}

export default Searchbar