# MARKETPLACE

This repository contains  ExpressJS API's based backend code that can be used to add and get a report of a market/mandi.


## 👨🏻‍🔬Set up and run The Server

### 📃Clone

Clone the repository from GitHub.

```
$ git clone https://github.com/PriyanshuRj/marketplace.git
```



#### 📂Create your .env file

1. After cloning the project navigate to the project directory using `cd marketplace` command.
2. Generate `.env` in the directory.
3. Add parameter to the env file.

Following parameters are required :

| Variable Name                     | Description                    |
|-----------------------------------|--------------------------------|
| DB_PATH                   | Path to a local mongo DB session. |
| PORT                   | Port no. at which you want the server to run. |


An example `.env` file looks like :

```
DB_PATH=mongodb://localhost:27017/marketplace
PORT=8000
```


### 💻Install Dependencies and Run the Server

```
$ npm install
$ npm run start
```
Now, use you can use the use the API's and try them out.


## ⚙️Specification

### /reports POST
This endpoint can be used to add a report for a given marketor mandi.

```http
POST https://localhost:8000/reports HTTP/1.1
Content-type: application/json;

{
    "reportDetails": {
        "userID": "string",
        "marketID": "string",
        "marketName": "string",
        "cmdtyID": "string",
        "marketType": "string",
        "cmdtyName": "string",
        "priceUnit": "string",
        "convFctr": "number",
        "price": "number"
    }
}

Response:
{
    "status": "success",
    "reportID": ID_OF_THE_RESPIVE_REPORT
}
```

### /reports GET
This endpoint can be used to get the report for a particular reportID.

```http
GET https://localhost:3000/reports?reportID=<ID_OF_THE_REQUIRED_REPORT> HTTP/1.1

Response:
{
    "reports": {
        "userID": "string",
        "marketID": "string",
        "marketName": "string",
        "cmdtyID": "string",
        "marketType": "string",
        "cmdtyName": "string",
        "priceUnit": "string",
        "convFctr": "number",
        "price": "number"
    }
}
```

## 🧪Testing the API's

you can test the apis using the testing command
1. Navigate to the marketplace directory
2. Navigate to `marketplace\test\getreport`
3. At line no. 47 `.get('/reports?reprtID=<ID_OF_A_CREATED_REPORT>')` replace `<ID_OF_A_CREATED_REPORT>` with an id of a created report you can create a report by the POST `/reposts` API and have the id in response of the POST request with name `reportID`
4. save the file an example id looks like `629af56b6d0664645c0e6967` so the line no. 47 will look like 
`.get('/reports?reprtID=629af56b6d0664645c0e6967')` after replacing `<ID_OF_A_CREATED_REPORT>`
5. Run `npm test` comand to test all the API's in the project.
