
const Transaction = require('./TransactionModel')



exports.getTransaction = async (req, res, next) => {
    try{
        const transaction = await Transaction.find();
        return res.status(200).json({
            success: true,
            count: transaction.length,
            data: transaction
        });
    } catch (err) {
        return res.send(500).json({
            success:false,
            error: 'Server Error'
        })
    }
}

exports.addTransaction = async (req, res, next) => {
try{
   const { text, amount } = req.body;

   const transaction = await Transaction.create(req.body);

   return res.status(201).json({
    success: true,
    date: transaction
   });

} catch (err) {
    if(err.name === 'ValidationError') {
        const messages = Object.values(err.errors).map(val => val.message);
        return res.status(404).json({
            success: false,
            error: 'Server Error'
        })
    } else {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}
}

exports.deleteTransaction = async (req, res, next) => {
    try{
        const transactions = await Transaction.findById(req.params.id);

        if(!transaction) {
            return res.status(404).json({
                success: false,
                error: 'No transaction found'
            });
        }

        await transaction.remove();

        return res.status(200).json({
            success:true,
            data: {}
        });
    } catch (err) {
        return res.status(500).json({
          success: false,
          error: 'Server Error'
        });
      }
    }