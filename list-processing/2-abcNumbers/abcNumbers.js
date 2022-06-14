const NUMBER_NAMES = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']

const stringSort = (str1, str2) => NUMBER_NAMES[str1].localeCompare(NUMBER_NAMES[str2]);

const alphabeticNumberSort = (numbers) => [...numbers].sort(stringSort);