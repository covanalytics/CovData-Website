
var app = angular.module('App', []);

//Spreadsheets links:https://docs.google.com/spreadsheets/d/FILE_ID/export?format=xlsx
//CSV links: https://drive.google.com/uc?export=download&id=FILE_ID

app.controller('dataDownloads', function ($scope, $http) {
    $scope.data = {
        "policeRuns": [{
            "title": "Police Responses",
				"Y2020": "http://bit.ly/PoliceRuns2020_csv",
				"Y2019": "http://bit.ly/PoliceRuns2019_csv",
				"Y2018": "http://bit.ly/PoliceRuns2018_csv",
                "Y2017": "http://bit.ly/PoliceRuns2017_csv",
                "Y2016": "http://bit.ly/PoliceRuns2016_csv",
				"Y2015": "http://bit.ly/PoliceRuns2015_csv",
                "Y2014": "http://bit.ly/PoliceRuns2014_csv",
				"Y2013": "http://bit.ly/PoliceRuns2013_csv"		
        }],
		"policeCrimes": [{
            "title": "Part I & II Crimes",              
                "CSV"  : "http://bit.ly/PartI_IICrimes_csv"
        }],
		"policeArrests": [{
            "title": "Arrests",
				"Y2020": "http://bit.ly/PoliceArrest2020_csv",
				"Y2019": "http://bit.ly/PoliceArrest2019_csv",
				"Y2018": "http://bit.ly/PoliceArrest2018",
                "Y2017": "http://bit.ly/PoliceArrest2017_csv",
                "Y2016": "http://bit.ly/PoliceArrest2016_csv",
				"Y2015": "http://bit.ly/PoliceArrest2015_csv",
                "Y2014": "http://bit.ly/PoliceArrest2014_csv",
				"Y2013": "http://bit.ly/PoliceArrest2013_csv"
        }],
		"parkSafety": [{
            "title": "Park Safety",
				"Y2020": "http://bit.ly/ParkSafety2020_csv",
				"Y2019": "http://bit.ly/ParkSafety2019_csv",
				"Y2018": "http://bit.ly/ParkSafety2018",
                "Y2017": "http://bit.ly/ParkSafety2017_csv",
                "Y2016": "http://bit.ly/ParkSafety2016_csv",
				"Y2015": "http://bit.ly/ParkSafety2015_csv",
                "Y2014": "http://bit.ly/ParkSafety2014_csv",
				"Y2013": "http://bit.ly/PoliceArrest2013_csv"	
        }],
		"fireRuns": [{
            "title": "Fire & EMS Responses",
				"Y2020": "http://bit.ly/FireRescue2020_csv",
				"Y2019": "http://bit.ly/FireRescue2019_csv",
				"Y2018": "http://bit.ly/FireRescue2018_csv",
                "Y2017": "http://bit.ly/FireRescue2017_csv",
                "Y2016": "http://bit.ly/FireRescue2016_csv",
				"Y2015": "http://bit.ly/FireRescue2015_csv",
                "Y2014": "http://bit.ly/FireRescue2014_csv"	
        }],
		//"ambulanceRuns": [{
            //"title": "Ambulance Responses",
              //  "Y2017": "",
                //"Y2016": "",
				//"Y2015": "",
                //"Y2014": ""	
        //}],
		"wasteMisses": [{
            "title": "Waste Service Misses",
				"Y2020": "http://bit.ly/WasteMisses__FY2020",
				"Y2019": "http://bit.ly/WasteMisses__FY2019",
				"Y2018": "http://bit.ly/WasteMissesFY2018_csv",
                "Y2017": "http://bit.ly/WasteMissesFY2017_csv",
                "Y2016": "http://bit.ly/WasteMissesFY2016_csv"
					
        }],
		"wasteTonnage": [{
            "title": "Waste & Recycling Tonnage",
				"Y2020": "http://bit.ly/RecyclingTonnageFY2020_csv",
				"Y2019": "http://bit.ly/RecyclingTonnageFY2019_csv",
				"Y2018": "http://bit.ly/RecyclingTonnageFY2018_csv",
                "Y2017": "http://bit.ly/RecyclingTonnageFY2017_csv",
                "Y2016": "http://bit.ly/RecyclingTonnageFY2016_csv"
					
        }],
		"redTags": [{
            "title": "Red Tag Set Outs",
                "Y2018": "http://bit.ly/RedTagsFY2018_csv",
				"Y2017": "http://bit.ly/RedTagsFY2017_csv",
                "Y2016": "http://bit.ly/RedTagsFY2016_csv"
					
        }],
		"wasteRecycling": [{
            "title": "Recycling Accounts",
				"Y2020": "http://bit.ly/RecyclingAccounts2020_csv",
				"Y2019": "http://bit.ly/RecyclingAccounts2019_csv",
				"Y2018": "http://bit.ly/RecyclingAccounts2018_csv",
                "Y2017": "http://bit.ly/RecyclingAccounts2017_csv",
                "Y2016": "http://bit.ly/RecyclingAccounts2016_csv"
					
        }],
		"hbaProgram": [{
            "title": "Homebuyer's Assistance Program",
				"Y2018": "http://bit.ly/HBA_LoansClosedPY2018_csv",
				"Y2017": "http://bit.ly/HBA_LoansClosedPY2017_csv",
                "Y2016": "http://bit.ly/HBA_LoansClosedPY2016_csv",
                "Y2015": "http://bit.ly/HBA_LoansClosedPY2015__csv",
				"Y2014": "http://bit.ly/HBA_LoansClosedPY2014_csv",
                "Y2013": "http://bit.ly/HBA_LoansClosedPY2013_csv",	
				"Y2012": "http://bit.ly/HBA_LoansClosedPY2012_csv"
        }],
		"buildingPermits": [{
            "title": "Building Permits",
				"Y2021": "http://bit.ly/BldPermitsFY2021_csv",
				"Y2020": "http://bit.ly/BldPermitsFY2020_csv",
				"Y2019": "http://bit.ly/BldPermitsFY2019_csv",
				"Y2018": "http://bit.ly/BldPermitsFY2018_csv",
				"Y2017": "http://bit.ly/BldPermitsFY2017_csv",
                "Y2016": "http://bit.ly/BldPermitsFY2016_csv",
                "Y2015": "http://bit.ly/BldPermitsFY2015_csv",
				"Y2014": "http://bit.ly/BldPermitsFY2014_csv"
                
        }],
		"treeCity": [{
            "title": "Tree City USA",
				"Y2017": "http://bit.ly/TreeCity_csv",               
                
        }],
		"codeEnforcement": [{
            "title": "Code Enforcement",
				"Closed": "http://bit.ly/ClosedCodeCases_csv",               
                "Active": "http://bit.ly/ActiveCodeCases_csv" 
        }]
    }
});


///////////////// Table Previews (Google Sheets)
//Public Safety
	// Police Runs
	$("#policeRuns-preview").attr("src", "https://docs.google.com/spreadsheets/d/1Q-dmPCjh49oqO7njHH4UFpEr5Q28TwAPiJa3-FlsRvU/pubhtml?widget=true&amp;headers=false");	
	//Police Arrests
	$("#policeArrests-preview").attr("src", "https://docs.google.com/spreadsheets/d/1-EPgUsMbXhmJ1NeXe7ZmOBXAseiTW0Ipf0IzZGKmI38/pubhtml?widget=true&amp;headers=false");
	//Police Clearance Rates
	$("#policeCrimes-preview").attr("src", "https://docs.google.com/spreadsheets/d/1EfzSvXSX1GbkFfUx8cnpIWghlaIwAxGh0vi1to1O6CM/pubhtml?widget=true&amp;headers=false");
	//Park Safety
	$("#parkSafety-preview").attr("src", "https://docs.google.com/spreadsheets/d/1TNv7OOdimu25VTee8vQFcVae3hbcThJOG2HL-5TZGLY/pubhtml?widget=true&amp;headers=false");
	//Fire Runs
	$("#fire-preview").attr("src", "https://docs.google.com/spreadsheets/d/1LFkkAnyduomokyAZWPpmxfabXt2QCPb3ZXVQhtM0PNs/pubhtml?widget=true&amp;headers=false");
	//Ambulance Runs
	//--$("#ambulance-preview").attr("src", "");
	
//Environment
	//Waste Misses
	$("#wasteMisses-preview").attr("src", "https://docs.google.com/spreadsheets/d/1rkcYrRp-60l_4jWFQ5Kq35WWx-oGryAeQ55fuh9ocpk/pubhtml?widget=true&amp;headers=false");
	//Waste & Recycling Tonnage
	$("#wasteTonnage-preview").attr("src", "https://docs.google.com/spreadsheets/d/1epYb7pan3KF787Pswymo8OA-nV9mrUy0pUB1ulJZMDg/pubhtml?widget=true&amp;headers=false");
	//Red Tag Set Outs
	$("#redTags-preview").attr("src", "https://docs.google.com/spreadsheets/d/17YEZeiXc1yoqy9-kb0Bm5p3bovaW9gqvzKyFilfuzFU/pubhtml?widget=true&amp;headers=false");
	//Recycle Accounts
	$("#wasteRecycling-preview").attr("src", "https://docs.google.com/spreadsheets/d/1lZ85U2QQ2Cw1kLQqteqCl87XP5B2tnQaU95eGiV0c_0/pubhtml?widget=true&amp;headers=false");
	//Tree City USA
	$("#treeCity-preview").attr("src", "https://docs.google.com/spreadsheets/d/1MrFxqPPHp6AbbcvGPTzVdTFjzEE8Nm5sAdQQGG6n8aI/pubhtml?widget=true&amp;headers=false");
	
//Thriving Neighborhoods & Economy
	//HBA Program
	$("#hbaProgram-preview").attr("src", "https://docs.google.com/spreadsheets/d/1GjQjOkyBBGrF0gPZlDFfGd_2egDGv8ViLND920VqawI/pubhtml?widget=true&amp;headers=false");
	//Building Permits
	$("#buildingPermits-preview").attr("src", "https://docs.google.com/spreadsheets/d/1J-i7xga_RVoNnvfaNaPB7PkcVvdSCUK7P0pomuSmnpo/pubhtml?widget=true&amp;headers=false");
	//Code Enforcement
	$("#codeEnforcement-preview").attr("src", "https://docs.google.com/spreadsheets/d/e/2PACX-1vQK6z-E2sokoFWW_Do4cltusALj4QGRUq1kZcKhhUPUPGvBz-vgHTO0zVqGDlA6EvjT3O5nmdldfMgn/pubhtml?widget=true&amp;headers=false");
	
