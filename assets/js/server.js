const express = required('express');
const bodyParser = required('body-parser');
const app = express();
const PORT = 3000; //port

app.use(bodyParser.json());
//route to handle payment validation
app.post('/validate-payment', (req,res) => {
    const validateResult = {
        success: true,
        message: 'Payment successfully validated'
    };
    res.json(validationResult);
});

app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});