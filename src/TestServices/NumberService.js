export const fetchNumber = async () => {
    try {
        const response = await fetch('http://numbersapi.com/random');
        const data = await response.text();
        const numberRegex = /\d+/;
        const extractedNumber = data.match(numberRegex)[0].substring(0, 3);
        return extractedNumber;
    } catch (error) {
        console.error('Error fetching number:', error);
    }
};
