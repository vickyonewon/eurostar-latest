import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  deluxeRooms,
  executiveRooms,
  luxuryRooms,
  standardRooms,
} from "./constants/data";
import { useDispatch } from "react-redux";
import { setRooms } from "../../redux/features/roomsSlice";

const useRoomController = () => {
  const { id } = useParams();
  const [selectedInDate, setSelectedInDate] = useState<Date | null>(null);
  const [selectedOutDate, setSelectedOutDate] = useState<Date | null>(null);
  const [children, setChildren] = useState<any>(1);
  const [adults, setAdults] = useState<any>(1);
  const [largeWidth, setLargeWidth] = useState<number>(3);
  const dispatch=useDispatch();


  let rooms: any = [];

  switch (id) {
    case "deluxe":
      rooms = deluxeRooms;
      break;
    case "executive":
      rooms = executiveRooms;
      break;
    case "luxury":
      rooms = luxuryRooms;
      break;
    case "standard":
      rooms = standardRooms;
      break;
    default:
      rooms = [];
  }
  useEffect(()=>{
    dispatch(setRooms(rooms));
  }, [dispatch, rooms]);

  const [currentPage, setCurrentPage] = useState(1);
  const roomsPerPage = 9;
  const totalPages = Math.ceil(rooms.length / roomsPerPage);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * roomsPerPage;
  const endIndex = startIndex + roomsPerPage;

  // Filter rooms based on the current page
  const roomsToDisplay = rooms.slice(startIndex, endIndex);
  const handlePageChange = (newPage: any) => {
    setCurrentPage(newPage);
  };

  const handleLargeWidth = (n: number) => {
    console.log(n);
    setLargeWidth(n);
  };
  const handleSelectedInDate=(x: any)=>{
    setSelectedInDate(x);
  }
  const handleSelectedOutDate=(x: any)=>{
    setSelectedOutDate(x);
  }

  const handleAdults=(x: any)=>{
    setAdults(x);
  }
  const handleChildren=(x: any)=>{
    setChildren(x);
  }

  const standardText=id && (id.slice(0, 1).toUpperCase() + id.slice(1, id.length));
  console.log(standardText);

  return {
    id,
    rooms,
    selectedInDate,
    selectedOutDate,
    handleSelectedInDate,
    handleSelectedOutDate,
    adults,
    handleAdults,
    children,
    handleChildren,
    largeWidth,
    totalPages,
    roomsToDisplay,
    currentPage,
    handlePageChange,
    handleLargeWidth,
    standardText,
  };
};

export default useRoomController;
