import styled from "styled-components";
import { FaChevronDown, FaChevronUp, FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import useInvoice from "../../context/useInvoice";
import { apiGetAllInvoices } from "../../services/apiGetAllInvoices";
import AddOrEditInvoice from "../AddInvoice/AddOrEditInvoice";

export default function HomeHeader() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [newInvoiceOpen, setNewInvoiceOpen] = useState(() => {
    return localStorage.getItem("newInvoiceOpen");
  });

  const filterQuery =
    selectedFilters.length > 0
      ? `?paymentStatus=${selectedFilters.join("&paymentStatus=")}`
      : "";

  const {
    setAllInvoiceLoader,
    setAllInvoiceError,
    setAllInvoices,
    allInvoices,
  } = useInvoice();

  const handleFilterChange = (status: string) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(status)
        ? prevFilters.filter((filter) => filter !== status)
        : [...prevFilters, status]
    );
  };

  useEffect(() => {
    localStorage.setItem("newInvoiceOpen", newInvoiceOpen?.toString() ?? "");
  }, [newInvoiceOpen]);

  useEffect(() => {
    const fetchAllInvoce = async () => {
      setAllInvoiceError(null);
      setAllInvoiceLoader(true);

      try {
        const data = await apiGetAllInvoices(filterQuery);
        setAllInvoices(data);
      } catch (err) {
        if (err instanceof Error) {
          setAllInvoiceError(err.message);
        } else {
          setAllInvoiceError("Somethin went wrong");
        }
      } finally {
        setAllInvoiceLoader(false);
      }
    };

    fetchAllInvoce();
  }, [setAllInvoiceError, setAllInvoiceLoader, filterQuery, setAllInvoices]);

  return (
    <>
      <StyledHomeHeader>
        <InvoiceCounter>
          <h2>Invoices</h2>
          <p>{allInvoices?.length || 0} invoices</p>
          <h3>There are {allInvoices?.length || 0} total invoices</h3>
        </InvoiceCounter>
        <FilterContainer>
          <FilterDiv onClick={() => setIsFilterOpen((isOpen) => !isOpen)}>
            <h3>Filter</h3>
            <h2>Filter by status</h2>
            {!isFilterOpen ? (
              <FaChevronDown color="#7C5DFA" size={14} />
            ) : (
              <FaChevronUp color="#7C5DFA" size={14} />
            )}

            {isFilterOpen && (
              <FillterOptionsContainer onClick={(e) => e.stopPropagation()}>
                {["Draft", "Pending", "Paid"].map((status) => (
                  <SingleOption key={status}>
                    <input
                      type="checkbox"
                      checked={selectedFilters.includes(status)}
                      onChange={() => handleFilterChange(status)}
                    />
                    <p>{status}</p>
                  </SingleOption>
                ))}
              </FillterOptionsContainer>
            )}
          </FilterDiv>
          <NewDiv onClick={() => setNewInvoiceOpen("true")}>
            <PlusCircle>
              <FaPlus color="#7C5DFA" />
            </PlusCircle>
            <p>New</p>
            <h3>New Invoice</h3>
          </NewDiv>
        </FilterContainer>
      </StyledHomeHeader>
      {newInvoiceOpen === "true" && (
        <AddOrEditInvoice setNewInvoiceOpen={setNewInvoiceOpen} />
      )}
    </>
  );
}

const StyledHomeHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 400px;
  margin: auto;

  @media screen and (min-width: 768px) {
    max-width: none;
    width: 672px;
  }

  @media screen and (min-width: 1440px) {
    width: 730px;
  }
`;

const InvoiceCounter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  & > h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: -0.75px;
    color: ${({ theme }) => theme.txtColor};

    @media screen and (min-width: 768px) {
      font-size: 36px;
    }
  }

  & > p {
    color: ${({ theme }) => theme.txtSecondary};
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: -0.1px;

    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  & > h3 {
    display: none;

    @media screen and (min-width: 768px) {
      display: block;
      color: ${({ theme }) => theme.txtSecondary};
      font-weight: 500;
      font-size: 13px;
      line-height: 15px;
      letter-spacing: -0.1px;
    }
  }

  @media screen and (min-width: 768px) {
    gap: 6px;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }
`;

const FilterDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  cursor: pointer;

  & > h3 {
    color: ${({ theme }) => theme.txtColor};
    font-weight: 700;
    font-size: 15px;
    line-height: 15px;
    letter-spacing: -0.25px;

    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  & > h2 {
    display: none;

    @media screen and (min-width: 768px) {
      color: ${({ theme }) => theme.txtColor};
      display: block;
      font-weight: 700;
      font-size: 15px;
      line-height: 15px;
      letter-spacing: -0.25px;
    }
  }

  @media screen and (min-width: 768px) {
    gap: 14px;
  }
`;

const FillterOptionsContainer = styled.div`
  padding: 24px 40px 24px 24px;
  position: absolute;
  top: 30px;
  background-color: ${({ theme }) => theme.filterBg};
  box-shadow: ${({ theme }) => theme.filterShadow};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media screen and (min-width: 768px) {
    padding: 24px 80px 24px 24px;
  }
`;

const SingleOption = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;

  & > input {
    appearance: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    border-radius: 2px;
    border: 1px solid #7c5dfa;
    background-color: ${({ theme }) => theme.checkboxBg};
    cursor: pointer;

    &:checked {
      background-color: #7c5dfa;
    }

    &:checked::after {
      content: "✔";
      color: #fff;
    }
  }

  & > p {
    color: ${({ theme }) => theme.txtColor};
    font-weight: 700;
    font-size: 15px;
    line-height: 15px;
    letter-spacing: -0.25px;
  }
`;

const NewDiv = styled.div`
  width: 90px;
  height: 44px;
  background-color: #7c5dfa;
  border-radius: 24px;
  display: flex;
  align-items: center;
  gap: 8px;

  & > p {
    font-weight: 700;
    font-size: 15px;
    line-height: 15px;
    letter-spacing: -0.25px;
    color: #ffffff;

    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  & > h3 {
    display: none;

    @media screen and (min-width: 768px) {
      display: block;
      font-weight: 700;
      font-size: 15px;
      line-height: 15px;
      letter-spacing: -0.25px;
      color: #ffffff;
    }
  }

  @media screen and (min-width: 768px) {
    width: 150px;
    height: 48px;
  }
`;

const PlusCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #fff;
  margin: 6px 0px 6px 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
