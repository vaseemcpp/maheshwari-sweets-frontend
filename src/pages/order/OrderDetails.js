import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getOrder } from "../../redux/features/order/orderSlice";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Spinner } from "../../components/loader/Loader";
import './OrderDetails.module.scss'
import OrderDetailsComp from "./OrderDetailsComp";

const OrderDetails = () => {
    const pdfRef = useRef();
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoading, isError, message, order } = useSelector(
      (state) => state.order
    );
  
    useEffect(() => {
      dispatch(getOrder(id));
    }, [dispatch, id]);

    const downloadPDF = () => {
        const input = pdfRef.current;
        html2canvas(input).then((canvas) => {
          const imgData = canvas.toDataURL("image/png");
          const pdf = new jsPDF("p", "mm", "a4", true);
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = pdf.internal.pageSize.getHeight();
          const imageWidth = canvas.width;
          const imageHeight = canvas.height;
          const ratio = Math.min(pdfWidth / imageWidth, pdfHeight / imageHeight);
          const imgX = (pdfWidth - imageWidth * ratio) / 2;
          const imgY = 30;
          pdf.addImage(
            imgData,
            "PNG",
            imgX,
            imgY,
            imageWidth * ratio,
            imageHeight * ratio
          );
          pdf.save(`shopitoInvoice.pdf`);
        });
      };

  return (
    <section>
        <OrderDetailsComp orderPageLink={"/order-history"}/>
    </section>
  )
};

export default OrderDetails;
