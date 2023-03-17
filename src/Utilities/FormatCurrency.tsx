const currencyFormatter = new Intl.NumberFormat(undefined, {
  currency: "NGN",
  style: "currency",
});

function FormatCurrency(number: number) {
  return currencyFormatter.format(number);
}

export default FormatCurrency;
