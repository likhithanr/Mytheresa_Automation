
describe('Get list of open git pulls', () => {
    it('Get open pull requests', () => {
        let data;
        let status;
        cy.fixture('git').then(function (gitData) {
            data = gitData;   
          status=data.status
        })
        cy.request({
          method: 'GET',
          url: ` https://api.github.com/repos/appwrite/appwrite/pulls?state=${status}&per_page=100`,
          headers: {
            Accept:'application/vnd.github+json'
          },
        }).then((response) => {
            var resp=[]
            var data=response.body
            data.forEach(element => {
                var el=[]
                var title=element.title.toString().replaceAll("#","")
                el.push(title)
                el.push(new Date(element.created_at).toDateString())
                el.push(element.user.login)
                resp.push(el)
                
            });
            download_csv_file(resp)
        })

      });
    })
    function download_csv_file(resp) {  
      
        //define the heading for each row of the data  
        var csv = 'PR_TITLE,CREATED_ON,AUTHOR\n';  
        //merge the data with CSV  
        resp.forEach(function(row) {  
               // console.log(row)
                csv += row.join(',');
                csv += "\n";  
               // console.log(row)

        });  
        //display the created CSV data on the web browser   
        document.write(csv);  
        var hiddenElement = document.createElement('a');  
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);  
    hiddenElement.target = '_blank';  
      
    //provide the name for the CSV file to be downloaded  
    hiddenElement.download = getFileName(); 
    hiddenElement.click();
    }

  function  getFileName(){
        let d = new Date();
        let dformat = `${d.getHours()}_${d.getMinutes()}_${d.getSeconds()}`;
    
        console.log("getCurrentDate : ", dformat);
        return "Open_Pull_Requests_" + dformat + ".csv";
      }