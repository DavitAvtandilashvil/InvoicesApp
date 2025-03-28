import styled from "styled-components";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import PaymentStatus from "../components/SingleInvoice/PaymentStatus";
import SingleInvoiceInfo from "../components/SingleInvoice/SingleInvoiceInfo";
import MobileButtonDiv from "../components/SingleInvoice/MobileButtonDiv";
import { useEffect, useState } from "react";
import useInvoice from "../context/useInvoice";
import { getSingleInvoice } from "../services/apiGetSingleInvoice";
import AddOrEditInvoice from "../components/AddInvoice/AddOrEditInvoice";
import SingleInvoiceSkl from "../components/skeletons/SingleInvoiceSkl";
import Modal from "../ui/Modal";
import { deleteSingleInvoice } from "../services/apiDeleteSingleInvoice";
import { toast } from "react-toastify";

export default function SingleInvoice() {
  const [editInvoiceOpen, setEditInvoiceOpen] = useState(() => {
    return localStorage.getItem("editInvoiceOpen");
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const {
    singleInvoice,
    setSingleInvoice,
    setSingleInvoiceLoader,
    setSingleInvoiceError,
    singleInvoiceLoader,
  } = useInvoice();

  useEffect(() => {
    const fetchSingleInvoice = async () => {
      setSingleInvoiceLoader(true);
      setSingleInvoiceError(null);

      try {
        const data = await getSingleInvoice(id ?? "");
        setSingleInvoice(data);
      } catch (err) {
        if (err instanceof Error) {
          setSingleInvoiceError(err.message);
        } else {
          setSingleInvoiceError("Something went wrong");
        }
      } finally {
        setSingleInvoiceLoader(false);
      }
    };

    fetchSingleInvoice();
  }, [setSingleInvoiceError, setSingleInvoiceLoader, id, setSingleInvoice]);

  useEffect(() => {
    localStorage.setItem("editInvoiceOpen", editInvoiceOpen?.toString() ?? "");
  }, [editInvoiceOpen]);

  const deleteInvoice = async () => {
    try {
      const data = await deleteSingleInvoice(singleInvoice?.id ?? "");
      toast.success(data.message);
      navigate("/home");
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  if (singleInvoiceLoader) return <SingleInvoiceSkl />;

  return (
    <>
      <InvoiceContainer>
        <StyledSingleInvoice>
          <GoBack onClick={() => navigate(-1)}>
            <FaChevronLeft color="#7C5DFA" size={14} />
            <p>Go Back</p>
          </GoBack>
          <PaymentStatus
            setEditInvoiceOpen={setEditInvoiceOpen}
            setModalIsOpen={setModalIsOpen}
          />
          <SingleInvoiceInfo />
        </StyledSingleInvoice>
        <MobileButtonDiv
          setEditInvoiceOpen={setEditInvoiceOpen}
          setModalIsOpen={setModalIsOpen}
        />
      </InvoiceContainer>
      {editInvoiceOpen === "true" && (
        <AddOrEditInvoice
          setEditInvoiceOpen={setEditInvoiceOpen}
          editInvoiceOpen={editInvoiceOpen}
          singleInvoice={singleInvoice}
        />
      )}
      {modalIsOpen && (
        <Modal
          setIsOpen={setModalIsOpen}
          title="Confirm Deletion"
          description={`Are you sure you want to delete invoice #${singleInvoice?.invoiceId}? This action cannot be
          undone.`}
          onClick={deleteInvoice}
          buttonTxt="Delete"
        />
      )}
    </>
  );
}

const InvoiceContainer = styled.div``;

const StyledSingleInvoice = styled.div`
  width: 327px;
  margin: auto;

  @media screen and (min-width: 768px) {
    width: 688px;
    padding-bottom: 30px;
  }

  @media screen and (min-width: 1440px) {
    width: 730px;
  }
`;

const GoBack = styled.div`
  margin-top: 33px;
  display: flex;
  align-items: center;
  gap: 24px;
  cursor: pointer;
  width: 90px;

  & > p {
    color: ${({ theme }) => theme.txtColor};
    font-weight: 700;
    font-size: 15px;
    line-height: 15px;
    letter-spacing: -0.25px;
    margin-top: 1px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 49px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 65px;
  }
`;
