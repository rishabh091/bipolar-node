const Booking = require('../modals/booking')

const book = async (book) => {
    const start = book.start

    const value = await Booking.find({
        $and: [
            {
                end: { $gt: start }
            },
            {
                facility: book.facility
            }
        ]
    })

    if(value.length == 0) {
        await Booking.create(book)

        return true
    }
    else {
        return false
    }
}

module.exports = {
    book: book
}