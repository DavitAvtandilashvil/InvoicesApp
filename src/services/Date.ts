export const formatDate = (invoiceDate: string) => {
  const date = new Date(invoiceDate);

  const formattedDate = `${date.getDate()} ${date.toLocaleString("en", {
    month: "short",
  })} ${date.getFullYear()}`;

  return formattedDate;
};

export const calculatePaymentDue = (
  invoiceDate: string,
  paymentTerms: string
) => {
  const date = new Date(invoiceDate);
  const daysToAdd = parseInt(paymentTerms); // Extracts the number from "8 days"

  if (isNaN(daysToAdd)) {
    throw new Error("Invalid paymentTerms format");
  }

  date.setDate(date.getDate() + daysToAdd); // Adds days to the invoice date

  const result = formatDate(date.toISOString().split("T")[0]);

  return result;
};
