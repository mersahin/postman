var body_str =`
{
  "products": {
    "tarif": {
      "id": 123,
    }
  },
  "receiverMail": "fromgithubsampleemail@ersah.in"
}
`
body_str = body_str.replace('Ã¼','ü').replace('ÃŸ','ß').replace('Ã¶','ö').replace('Ã¤','ä')
var body = JSON.parse(body_str);
body.documentReceiverMail = "fromgithubsampleemail@ersah.in";
let funkType = body.products.tarif.id.toString().length == 5 ? 'mobil':'other'; 
pm.environment.set('funkType', funkType); console.log(funkType);

if(funkType=='festnetz' && !body.location && !body.customer.nationalDestinationCode)  nationalDestinationCode_is_null
pm.environment.set('req_body', JSON.stringify(body));
