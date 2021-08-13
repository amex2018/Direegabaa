class ApiFeatures {

    constructor(query, queryStr){
            query = this.query
            queryStr = this.queryStr
    }

    search() {

    const keyword = this.queryStr.keyword ? {

             name: {
                 $regex: this.queryStr.keyword,
                 $options: 'i'
             }

        } : {}
       
        console.log(`kiss: `)

         this.query = this.query.find({ ...keyword })
         return this;

    }

   
    
}

module.exports = ApiFeatures

