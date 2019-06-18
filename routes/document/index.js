module.exports = (data) => {

    let tableData = "";
    for(let i=0;i<data.invoiceDataItem.length;i++){
        tableData+=(` <tr>
            <td>${i+1}</td>
            <td>${data.invoiceDataItem[i].description}</td>
            <td>${data.invoiceDataItem[i].quantity}</td>
            <td>${data.invoiceDataItem[i].unitPrice}</td>
            <td>${data.invoiceDataItem[i].total}</td></tr>`)
         
    }
    console.log(tableData);
    return `
        
    <!DOCTYPE html>
    <html lang="en">
       <head>
          <meta charset="UTF-8">
          <style>
    
            body{
                width: 580px;
                font-family: Arial, Helvetica, sans-serif;
                background: url('paper.png');
                background-size: cover;
            }    
            .row div{
                display: inline-block;
            }

            .row div:nth-child(2){
                float: right;
            }

            .companyName{
                font-size: 12px;
                font-weight: bold;
            }
    
            .invoiceName{
                font-size: 16px;
                font-weight: bolder;
            }
    
            .addressLine {
                font-size: 10px;
                text-transform: capitalize;
            }
            
            .invoiceDate{
                margin-top: 2px;
            }
            
            .invoiceDate, .invoiceNumber, .poNumber{
                font-size: 10px;
                text-transform: capitalize;
                font-size: 10px;
            }
    
            .invoiceFormRow5{
                margin-top: 5px;
            }
    
            .phoneNumber, .mailId{
                text-transform: lowercase;
                font-size: 10px;
                
            }
    
            .clientName, .clientCompanyName{
                text-transform: capitalize;
                font-size: 10px;
                font-weight: bold;
            }
    
            hr {
                background: #ddd;
                color: #ddd;
                clear: both;
                float: none;
                width: 100%;
                height: 1px;
                margin: 10px 0 0.5em;
                border: none;
            }
    
            textarea {
                background : none;
                border : 0;
                outline : 0;
                text-align: left;
            }
         
            .invoiceContent{
                resize: none;
                overflow: hidden;
                width: 100%;   
                line-height: 20px;
                font-family: "Helvetica Neue",arial;
                border: 0;
                font-size: 10px;
                margin: 25px 0px 10px 0px;
                height: 140px;
                display: block;
            }
            
            .greeting{
                margin: 20px 0 0px 0;
                padding-bottom: 20px;
                line-height: 10px;
                height: 100px;    
            }
    
            .invoiceFormRow8 table {
                width: 100%;
            }
    
            .invoiceFormRow8 table th , .invoiceFormRow8 table tr, .invoiceFormRow8 table, .invoiceFormRow8 table td  {
                border-left: 1px solid #ada9a9;
                border-right: 1px solid #ada9a9;
                border-top: none;
                border-bottom: none;
                border-collapse: collapse;
                font-size: 10px;
                
            }

            .invoiceFormRow8 table input {
                padding: 1px 0;
            }
    
            .invoiceFormRow8 table, .invoiceFormRow8 table tfoot tr{
                border-top: 1px solid #ada9a9;
                border-bottom: 1px solid #ada9a9;
            }
    
            .invoiceFormRow8 table tfoot tr td {
                padding: 0;
            }
    
            .invoiceFormRow8 table tfoot tr:last-child{
                background: #b1b1b1;
            }
    
            .tab-col-1{
                width: 50px;
                padding : 0;
            }
            
            .tab-col-2{
                width: 330px;
                padding : 0;
            }
            
            .tab-col-3{
                width: 120px;
                padding : 0;
            }
            
            .tab-col-4{
                width: 120px;
                padding : 0;
            }
            
            .tab-col-5{
                width: 120px;
                padding : 0;
            }
            
            .inp-col, .inp-col-head{
                width: 100%;
                border: none;
                outline: none;
                text-indent: 10px;
                background: none;
                padding: 2px 0;
                font-size: 10px;
            }
    
            .inp-col-head{
                background: #b1b1b1;
                text-transform: capitalize;   
                font-size: 10px;
            }
    
            tbody tr:nth-child(even){
                background: #eaeaea;
            }
    
    
          </style>
       </head>
       <body>
          <div class = "Invoice" >
          <div class = "container">
             <div class = "invoiceForm" id="invoiceGenerate">
                <div class = "row invoiceFormRow1">
                   <div class = "companyName">
                    ${data.companyName} 
                   </div>
                   <div class = "invoiceName">
                   ${data.invoiceName}
                   </div>
                </div>
                <div class = "row invoiceFormRow2">
                   <div class = "addressLine">
                   ${data.addressLine[0]}
                   </div>
                   <div class = "invoiceDate">
                   ${data.invoiceDate}
                   </div>
                </div>
                <div class = "row invoiceFormRow3">
                   <div class = "addressLine">
                    ${data.addressLine[1]}
                   </div>
                   <div class="invoiceNumber">
                    ${data.invoiceNumber}
                   </div>
                </div>
                <div class = "row invoiceFormRow4">
                   <div class = "addressLine">
                   ${data.addressLine[2]}
                   </div>
                   <div class="poNumber">
                   ${data.poNumber}
                   </div>
                </div>
                <div class = "row invoiceFormRow5">
                   <div class="phoneNumber">
                   ${data.phoneNumber}
                   </div>
                   <div class="clientName">
                   ${data.clientName}
                   </div>
                </div>
                <div class = "row invoiceFormRow6">
                   <div class="mailId">
                    ${data.mailId}
                   </div>
                   <div class = "clientCompanyName">
                   ${data.clientCompanyName}
                   </div>
                </div>
                <hr />
                <div class = "row invoiceFormRow7">
                   <textarea class="invoiceContent">
                    ${data.invoiceContent}
                   </textarea>
                </div>
                <div class = "row invoiceFormRow8">
                        <table>
                            <thead>
                                <tr>
                                    <th class = "tab-col-1">
                                        <input type ="text" class = "inp-col-head"  value = "${data.slNo}"/>
                                    </th>
                                    <th class="tab-col-2">
                                        <input type ="text" class = "inp-col-head" value = "${data.description}"/>
                                    </th>
                                    <th class = "tab-col-3" >
                                        <input type ="text" class = "inp-col-head" value = "${data.quantity}"/>
                                    </th>
                                    <th class = "tab-col-4">
                                        <input type ="text" class = "inp-col-head" value = "${data.unitPrice}"/>
                                    </th>
                                    <th class = "tab-col-5">
                                        <input type ="text" class = "inp-col-head" value = "${data.total}"/>
                                    </th>
                                </tr>
                            </thead>    
                            <tbody>
                                <!-- {
                                    this.state.invoiceDataItem.map((data, index) => {
                                        return <tr key = {index}>
                                            <td class = "tab-col-1">
                                                <input type ="text" class = "inp-col not-allowed" name = "slNo" disabled value = {index+1} id = {index} />
                                            </td>
                                            <td class="tab-col-2">
                                                <input type ="text" class = "inp-col" name = "description" value = {data.description} id = {index} onChange = {this.changeDataHandler.bind(this)} />    
                                            </td>
                                            <td class = "tab-col-3" >
                                                <input type ="text" class = "inp-col" name = "quantity" value = {data.quantity} id = {index} onChange = {this.changeDataHandler.bind(this)} />
                                            </td>
                                            <td class = "tab-col-4">
                                                <input type ="text" class = "inp-col" name = "unitPrice" value = {data.unitPrice} id = {index} onChange = {this.changeDataHandler.bind(this)} />
                                            </td>
                                            <td class = "tab-col-5">
                                                {
                                                    <input type ="text" class = "inp-col not-allowed" name = "total" disabled value = {data.total === "" ? '-': data.total} id = {index} onChange = {this.changeDataHandler.bind(this, index)} />
                                                }
                                            </td>    
                                        </tr>
                                    })
                                } -->
                                ${tableData}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="4">
                                        <input type ="text" class = "inp-col" name = "subTotal" value = "${data.subTotal}"/>
                                    </td>
                                    <td colSpan="1">
                                        <input type ="text" class = "inp-col not-allowed" disabled  value = "${data.subTotalValue}"/>    
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="4">
                                        <input type ="text" class = "inp-col salesTax" value = "${data.salesTax}" />
                                    </td>
                                    <td colSpan="1">
                                        <input type ="text" class = "inp-col salesTaxValue not-allowed" disabled value = "${data.salesTaxValue}"/>    
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="4">
                                        <input type ="text" class = "inp-col" value = "${data.totalAmount}"/>
                                    </td>
                                    <td colSpan="1">
                                        <input type ="text" class = "inp-col not-allowed" disabled value = "${data.totalAmountValue}"/>    
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>       
                <div class = "row invoiceFormRow9">
                   <textarea class="invoiceContent greeting">
                        ${data.invoiceGreetingContent}
                   </textarea>
                </div>
             </div>
          </div>
          </div>
       </body>
    </html>    
 
                 
     `
}