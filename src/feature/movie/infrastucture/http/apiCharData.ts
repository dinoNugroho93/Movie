import { ApiConfig } from "../../../../ApiConfig/config";

export const ApiChartingData = async (chart = 507086 ) => {    
    const response = await ApiConfig.get('/similar?api_key=6f3f1dcfb0a1f8c6a9e1ac27747c50b2&language=en-US&page=1', {
        params: {                        
            movie_id: chart,
        }         
    });  
    console.log("RESPONSE", response)              
    return response;       

};