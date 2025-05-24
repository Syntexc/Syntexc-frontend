"use client";
import React from "react";  
import axios from "axios";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import SideBarLayout from "@/components/SideBarLayout";
import Tbody from "@/components/Tbody";
import styles from "../../styles/inquire.module.scss"

const FreeCourseList = () => {
  const [response, setResponse] = React.useState<any>([]);

  const getAllInquiryData = async () => {
    const data = await axios.get("/api/inquiry");
    if (data.status === 200) {
      console.log("data inquiry", data);
      setResponse(data?.data);
    }
  };

  React.useEffect(() => {
    getAllInquiryData();
  }, []);

  console.log("response data", { response });

  const downloadExcel = (data: any[], fileName: string) => {
    // Convert JSON data to worksheet
    const worksheet = XLSX.utils.json_to_sheet(data);
    // Create a workbook
    const workbook = XLSX.utils.book_new();
    // Append the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    // Generate Excel file
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    // Create a Blob from the buffer
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    // Use FileSaver to save the Blob as a file
    saveAs(blob, `${fileName}.xlsx`);
  };

  return (
    <>
      <SideBarLayout>
      
<div className={styles.container}>
  <div className={styles.card}>
    <div className={styles.cardHeader}>
      <h4 className={styles.title}>All Inquires</h4>
      <button
        onClick={() => downloadExcel(response, "UserData")}
        className={styles.downloadBtn}
      >
        Download Excel
      </button>
    </div>

    <div className={styles.tableWrapper}>
      <div className={styles.tableScroll}>
        <div className={styles.tableContainer}>
          <div className="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
            <div className="dataTable-container">
              <table className={`${styles.table} dataTable-table`} id="datatable_1">
                <thead className={styles.thead}>
                  <tr>
                    <th className={styles.th}><a href="#" className="dataTable-sorter">S.No</a></th>
                    <th className={styles.th}><a href="#" className="dataTable-sorter">User Name</a></th>
                    <th className={styles.th}><a href="#" className="dataTable-sorter">User Email</a></th>
                    <th className={styles.th}><a href="#" className="dataTable-sorter">User Phone Number</a></th>
                    <th className={styles.th}><a href="#" className="dataTable-sorter">Message</a></th> 
                    <th className={styles.th}><a href="#" className="dataTable-sorter">Action</a></th>
                  </tr>
                </thead>
                <Tbody response={response} />
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      </SideBarLayout>
    </>
  );
};
export default FreeCourseList;
