class ApiFeatures {

    constructor(query, queryStr){
            query = this.query
            queryStr = this.queryStr
    }

    search () {
        const keyword = this.queryStr.$key ? {
             name: {
                 $regex: this.queryStr.$key,
                 $options: 'i'
             }
        } : {}

         this.query = this.query.find({ ...keyword })
         return this;
    }

   
    
}

module.exports = ApiFeatures

