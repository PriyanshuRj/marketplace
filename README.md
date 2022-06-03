# MARKETPLACE

This repository contains  ExpressJS API's based backend code that can be used to add and get a report of a market/mandi.


## Set up and run demo

### Clone

Clone the repository from GitHub.

```
$ git clone https://github.com/PriyanshuRj/marketplace.git
```



#### Create your .env file

1. Affter cloning the project navigate to the project directory using `cd marketplace` command.
2. Generate `.env` in the directory.
3. Add parameter to the env file.

Following parameters are required :

| Variable Name                     | Description                    |
|-----------------------------------|--------------------------------|
| DB_PATH                   | Path to a local mongo DB session. |





### Install Dependencies and Run the Server

```
$ npm install
$ npm run start
```
Now, use you can use the use the API's and try them out.


## Specification

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
