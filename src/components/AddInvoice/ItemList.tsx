import styled from "styled-components";
import { FaTrash } from "react-icons/fa";
import {
  Control,
  FieldErrors,
  useFieldArray,
  UseFormRegister,
  useWatch,
  UseFormSetValue,
} from "react-hook-form";
import { PostInvoice } from "../../types/types";
import SingleInput from "./SingleInput";
import { useEffect } from "react";

interface ItemListProps {
  register: UseFormRegister<PostInvoice>;
  errors: FieldErrors<PostInvoice>;
  control: Control<PostInvoice>;
  setValue: UseFormSetValue<PostInvoice>;
}

export default function ItemList({
  register,
  errors,
  control,
  setValue,
}: ItemListProps) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });
  const watchedItems = useWatch({ control, name: "items" });

  useEffect(() => {
    // Add one default item when the component mounts if items is empty
    if (fields.length === 0) {
      append({ itemName: "", quantity: 1, price: 0, total: 0 });
    }
  }, [fields, append]);

  useEffect(() => {
    watchedItems?.forEach((item, index) => {
      const total = item.quantity * item.price;
      if (watchedItems[index].total === total) return;

      setValue(`items.${index}.total`, total, { shouldValidate: true });
    });
  }, [watchedItems, setValue]);

  return (
    <StyledItemList>
      <h2>Item List</h2>
      <ItemListContainer>
        {fields.map((field, index) => {
          const quantity = watchedItems?.[index]?.quantity || 0;
          const price = watchedItems?.[index]?.price || 0;
          const total = quantity * price;

          return (
            <Inputs key={field.id}>
              <SingleInput
                title="Item Name"
                gridcolumn="span 9"
                gridcolumntablet="span 3"
                inputType="text"
                register={register(`items.${index}.itemName`, {
                  required: "Item name is required",
                })}
                error={errors?.items?.[index]?.itemName?.message}
              />
              <SingleInput
                title="Qty."
                gridcolumn="span 2"
                gridcolumntablet="span 2"
                inputType="number"
                register={register(`items.${index}.quantity`, {
                  required: "Quantity is required",
                  min: { value: 1, message: "Must be at least 1" },
                })}
                error={errors?.items?.[index]?.quantity?.message}
              />
              <SingleInput
                title="Price"
                gridcolumn="span 3"
                gridcolumntablet="span 2"
                inputType="number"
                register={register(`items.${index}.price`, {
                  required: "Price is required",
                  min: { value: 0, message: "Must be at least 0" },
                })}
                error={errors?.items?.[index]?.price?.message}
              />
              <SingleInput
                title="Total"
                gridcolumn="span 3"
                gridcolumntablet="span 2"
                inputType="number"
                register={register(`items.${index}.total`)}
                disabled={true}
                value={total}
              />
              <StyledTrash
                color="#777F98"
                size={17}
                onClick={() => remove(index)}
              />
            </Inputs>
          );
        })}
      </ItemListContainer>
      <AddButton
        type="button"
        onClick={() =>
          append({ itemName: "", quantity: 1, price: 0, total: 0 })
        }
      >
        + Add New Item
      </AddButton>
    </StyledItemList>
  );
}

const StyledItemList = styled.div`
  margin-top: 69px;

  & > h2 {
    font-weight: 700;
    font-size: 18px;
    line-height: 32px;
    letter-spacing: -0.38px;
    color: #777f98;
  }
`;

const ItemListContainer = styled.div`
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  gap: 49px;
`;

const Inputs = styled.div`
  display: grid;
  column-gap: 25px;
  row-gap: 16px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

  @media screen and (min-width: 616px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;

const StyledTrash = styled(FaTrash)`
  grid-column: span 1;
  margin-top: 13px;
  height: 72px;
`;

const AddButton = styled.button`
  margin-top: 48px;
  font-family: inherit;
  width: 100%;
  height: 48px;
  border-radius: 24px;
  color: ${({ theme }) => theme.labelTxt};
  background-color: ${({ theme }) => theme.newItemBtnBg};
  border: none;
  outline: none;
  font-weight: 700;
  font-size: 15px;
  line-height: 15px;
  letter-spacing: -0.25px;
  text-align: center;
  cursor: pointer;
`;
