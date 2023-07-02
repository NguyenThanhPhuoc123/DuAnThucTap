// import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./css/doisoatve.css";
import { useState, useEffect } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

function createData(stt, sove, date, tenloaive, cong, soat) {
  return { stt, sove, date, tenloaive, cong, soat };
}

const rows = [
  createData("1", 12345678, "14/04/2021", "Vé cổng", "Cổng 1", "Chưa đổi soát"),
  createData("2", 12345678, "14/04/2022", "Vé cổng", "Cổng 1", "Đã đổi soát"),
  createData("3", 87654321, "14/04/2023", "Vé cổng", "Cổng 1", "Chưa đổi soát"),
  createData("4", 98765432, "14/04/2024", "Vé cổng", "Cổng 1", "Chưa đổi soát"),
  createData("5", 12345678, "14/04/2025", "Vé cổng", "Cổng 1", "Đã đổi soát"),
  createData("6", 23456789, "14/04/2026", "Vé cổng", "Cổng 1", "Chưa đổi soát"),
  createData("8", 12345678, "14/04/2021", "Vé cổng", "Cổng 1", "Đã đổi soát"),
  createData("9", 12345678, "14/04/2022", "Vé cổng", "Cổng 1", "Đã đổi soát"),
];

const makeStyle = (soat) => {
  if (soat === "Chưa đổi soát") {
    return {
      color: "gray",
    };
  } else if (soat === "Đã đổi soát") {
    return {
      color: "red",
    };
  }
};


export function Doisoatve() {
  useEffect(() => {
    // Khởi tạo rowsToDisplay với `rowsPerPage` phần tử đầu tiên của `rows` array
    setRowsToDisplay(rows.slice(0, rowsPerPage));
  }, []); // empty dependency array ensures this effect only runs once, when the component mounts

  const [currentPage] = useState(1);
  const [rowsPerPage] = useState(8);
  const [searchValue, setSearchValue] = useState("");
  const [isLabeled, setIsLabeled] = useState("Tất cả");
  const [rowsToDisplay, setRowsToDisplay] = useState([]);
  const handleSearch = (event) => {
    event.preventDefault();

    const filteredRows = rows.filter((row) => {
      if (isLabeled === "Đã đổi soát" && row.soat === "Đã đổi soát") {
        return true;
      }
      if (isLabeled === "Chưa đổi soát" && row.soat === "Chưa đổi soát") {
        return true;
      }
      if (isLabeled === "Tất cả") {
        return true;
      }
      return false;
    });

    const searchedRows = filteredRows.filter((row) =>
      row.sove.toString().includes(searchValue)
    );

    setRowsToDisplay(searchedRows.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage));
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleFilterChange = (event) => {
    setIsLabeled(event.target.value);
  };


  

  return (
    <div className="AppGlass2">
      <div className="Table">
        <h1>Đổi soát vé</h1>
        <input
            className="search-locve"
            placeholder="Lọc theo số vé"
            type="text"
            id="search"
            value={searchValue}
            onChange={handleSearchChange}
          /><br />
          <button className="chotdoisoat-button" type="submit">
            Chốt đổi vé
          </button>
        <div className="khung2">
          <h3>Lọc vé</h3>
          <select className="option">
            <option value="option1">Hội chợ triển lãm tiêu dùng 2021</option>
            <option value="option2">Hội chợ triển lãm tiêu dùng 2021</option>
           
          </select>
        
          <h4 className="text-tinhtrang">Tình trạng soát vé</h4>
          <div className="checkboxes">
            <label>
              <input
                type="radio"
                value="Tất cả"
                checked={isLabeled === "Tất cả"}
                onChange={handleFilterChange}
              />
              Tất cả
            </label>
            <br />
            <label>
              <input
                type="radio"
                value="Chưa đổi soát"
                checked={isLabeled === "Chưa đổi soát"}
                onChange={handleFilterChange}
              />
              Chưa đổi soát
            </label>
            <br />
            <label>
              <input
                type="radio"
                value="Đã đổi soát"
                checked={isLabeled === "Đã đổi soát"}
                onChange={handleFilterChange}
              />
              Đã đổi soát
            </label>
          </div>
          <h4 className="text-loaive">Loại vé</h4>
          <p className="vecong">Vé cổng</p>
          <h4 className="text-tungay">Từ ngày</h4>
          <input className="text-input" placeholder="01/05/2021"/><FaRegCalendarAlt className="iconlich1" color="rgba(255, 184, 0, 1)" />
          <h4 className="text-denngay">Đến ngày</h4>
          <input className="text-inputdn" placeholder="dd/mm/yy"/><FaRegCalendarAlt className="iconlich2" color="rgba(255, 184, 0, 1)" />
          <form onSubmit={handleSearch}>
         
          <button className="loc-ve-button" type="submit">
            Lọc vé
          </button>
        </form>
        </div>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">STT</TableCell>
                <TableCell align="left">Số vé</TableCell>
                <TableCell align="left">Ngày sử dụng</TableCell>
                <TableCell align="left">Tên loại vé</TableCell>
                <TableCell align="left">Cổng check-in</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rowsToDisplay.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {((currentPage - 1) * rowsPerPage + 1) + index}
                  </TableCell>

                  <TableCell component="th" scope="row">
                    {row.sove}
                  </TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">{row.tenloaive}</TableCell>
                  <TableCell align="left">
                    <span className="status">{row.cong}</span>
                  </TableCell>
                  <TableCell
                    align="left"
                    style={makeStyle(row.soat)}
                  >
                    {row.soat}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
export default Doisoatve;
