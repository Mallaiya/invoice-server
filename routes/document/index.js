module.exports = (data) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
       <head>
          <meta charset="UTF-8">
          <style>

    .companyName {
        position : absolute
        left: 10px;
        top: 10px;
        font-size: 10px;
    }
    
    .invoiceName {
        position : absolute
        right: 10px;
        top: 10px;
    }

    .invoiceWidgetRow2{
        position: relative;
        top: 160px;
    }
    
    .invoiceWidgetRow2 button{
        background: #f36331; 
        color: #fff;
        border: none;
        padding: 7px 18px;
        -webkit-border-radius : 12px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 600;  
        outline: none;                                                                                                                         
    }
    
    .invoiceWidgetRow3{
        position: relative;
        top: 290px;
    }
    
    .invoiceForm {
        background: #fcffff url("./images/paper.png");
        width: 100%;
        border-radius: 3px;
        
    
    }
    
    .invoiceForm div{
        display: flex;
    }
    
    .row div{
        width: 150%;
    }
    
    .row div input{
     
        font-family: "Helvetica Neue",arial,sans;
        color: #222;
        background: none;
        border: none;
    }
    
    .row div input:focus{
        outline: 0;
        color: #000;
        -webkit-box-shadow: 0px 0px 8px rgba(0,0,0,0.1);
    }
    
    
    .left-align {
        text-align: left;
    }
    
    .left-align:focus{
        background: -webkit-gradient(linear, left top, right top, from(rgba(255,255,100,0.5)), to(rgba(255,255,100,0.2)))!important;
    }
    
    .right-align {
        text-align: right;
    }
    
    .right-align:focus{
        background: -webkit-gradient(linear, right top, left top, from(rgba(255,255,100,0.5)), to(rgba(255,255,100,0.2)))!important;
    }
    
    .invoiceFormRow1 .companyName{
        font-size: 14px;
        font-weight: bold;
        line-height: 45px;
        height: 45px;
        text-transform: capitalize;
    }
    
    .invoiceFormRow1 .invoiceName{
        text-transform: uppercase;
        font-size: 20px;
        font-weight: bold;
    }
    
    .invoiceFormRow2{
        margin-top: 10px;
    }
    
    .addressLine {
        font-size: 10px;
        margin-bottom: 5px;
        height: 15px;
        text-transform: capitalize;
    }
    
    .invoiceDate, .invoiceNumber, .poNumber{
        height: 15px;
        text-transform: capitalize;
        font-size: 10px;
    }
    
    .invoiceFormRow5{
        margin-top: 10px;
    }
    
    .phoneNumber, .mailId{
        height: 16px;
        text-transform: lowercase;
        font-size: 10px;
        margin-top: 4px;
    }
    
    .clientName, .clientCompanyName{
        height: 18px;
        text-transform: capitalize;
        font-size: 12px;
        font-weight: bold;
    }
    
    hr {
        background: #ddd;
        color: #ddd;
        clear: both;
        float: none;
        width: 100%;
        height: 1px;
        margin: 25px 0 1.45em;
        border: none;
    }
    
    textarea {
        background : none;
        border : 0;
        outline : 0;
    }
    
    textarea:focus{
        background: rgba(255,255,100,0.4)!important;
        background: -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,100,0.5)), to(rgba(255,255,100,0.1)))!important;
        color: #000;
        text-shadow: #fff 1px 1px;
        -webkit-box-shadow: 0px 0px 8px rgba(0,0,0,0.1);
    }
    
    .invoiceContent{
        resize: none;
        overflow: hidden;
        width: 100%;   
        padding: 20px 0px 0px 0px;
        line-height: 20px;
        font-family: "Helvetica Neue",arial;
        border: 0;
        font-size: 11px;
        margin: 0px auto;
        height: 180px;
        display: block;
    }
    
    .greeting{
        margin: 30px 0 150px 0;
        padding-bottom: 20px;
        height: 80px;    
    }
    
    .invoiceFormRow8 table {
        width: 100%;
    }
    .invoiceFormRow8 thead td input {
        width: 100%;
        margin: 0;
    }
    
    .invoiceFormRow8 table th , .invoiceFormRow8 table tr, .invoiceFormRow8 table, .invoiceFormRow8 table td  {
        border-left: 1.5px solid #ada9a9;
        border-right: 1.5px solid #ada9a9;
        border-top: none;
        border-bottom: none;
        border-collapse: collapse;
    }
    
    .invoiceFormRow8 table, .invoiceFormRow8 table tfoot tr{
        border-top: 1.5px solid #ada9a9;
        border-bottom: 1.5px solid #ada9a9;
    }
    
    .invoiceFormRow8 table tfoot tr td {
        padding: 0;
    }
    .invoiceFormRow8 table tfoot tr input{
        background: #dcdcdc;
        font-weight: bold;
        font-size: 12px;
    }
    
    .invoiceFormRow8 table tfoot tr:last-child input{
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
    
    .tab-col-5 .inp-col{
        font-weight: bold;
    }
    
    .not-allowed{
        cursor: not-allowed;
    }
    
    .not-allowed:disabled{
        color: #000;
    }
    
    
    .inp-col, .inp-col-head{
        width: 100%;
        border: none;
        outline: none;
        text-indent: 10px;
        background: none;
        padding: 4px 0;
        font-size: 12px;
    }
    
    .inp-col:focus, .inp-col-head:focus, tfoot input:focus {
        background: -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,100,0.5)), to(rgba(255,255,100,0.1)))!important;
    }
    
    .inp-col-head{
        background: #b1b1b1;
        text-transform: capitalize;
        font-weight: bold;
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
                   <div>
                   ${data.addressLine[0]}
                   </div>
                   <div>
                   ${data.invoiceDate}
                   </div>
                </div>
                <div class = "row invoiceFormRow3">
                   <div>
                    ${data.addressLine[1]}
                   </div>
                   <div>
                    ${data.invoiceNumber}
                   </div>
                </div>
                <div class = "row invoiceFormRow4">
                   <div>
                   ${data.addressLine[1]}
                   </div>
                   <div>
                   ${data.poNumber}
                   </div>
                </div>
                <div class = "row invoiceFormRow5">
                   <div>
                   ${data.phoneNumber}
                   </div>
                   <div>
                   ${data.clientName}
                   </div>
                </div>
                <div class = "row invoiceFormRow6">
                   <div>
                    ${data.mailId}
                   </div>
                   <div>
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
                                        <input type ="text" class = "inp-col-head" value= "#"/>
                                    </th>
                                    <th class="tab-col-2">
                                        <input type ="text" class = "inp-col-head" value= "Item Description"/>    
                                    </th>
                                    <th class = "tab-col-3" >
                                        <input type ="text" class = "inp-col-head" value= "Quantity"/>
                                    </th>
                                    <th class = "tab-col-4">
                                        <input type ="text" class = "inp-col-head" value= "Unit price (€)"/>
                                    </th>
                                    <th class = "tab-col-5">
                                        <input type ="text" class = "inp-col-head" value= "Total (€)"/>
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
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="4">
                                        <input type ="text" class = "inp-col" name = "subTotal" value = "Subtotal"/>
                                    </td>
                                    <td colSpan="1">
                                        <input type ="text" class = "inp-col not-allowed" disabled  value = "5000.00"/>    
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="4">
                                        <input type ="text" class = "inp-col salesTax" value = "Sales Tax" />
                                    </td>
                                    <td colSpan="1">
                                        <input type ="text" class = "inp-col salesTaxValue not-allowed" disabled value = "0.00"/>    
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="4">
                                        <input type ="text" class = "inp-col" value = "Total"/>
                                    </td>
                                    <td colSpan="1">
                                        <input type ="text" class = "inp-col not-allowed" disabled value = "5000.0"/>    
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