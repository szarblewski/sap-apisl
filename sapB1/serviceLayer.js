const axios = require('axios');
const moment = require('moment');
const https = require('https');
require('dotenv').config();


class ServiceLayer {
    constructor() {
        this.instance = null
        this.sessionTimeout = 0
        this.startSessionTime = null
        this.endSessionTime = null
        this.headers = {}
    }

    
    async startSession() {
        //console.log('Starting session...');
        this.instance = axios.create({
            baseURL: 'https://' + process.env.SL_HOST + ':' + process.env.SL_PORT + '/' + process.env.SL_VERSION
        });
        this.instance.defaults.httpsAgent = new https.Agent({
            rejectUnauthorized: false
        });
        this.instance.defaults.withCredentials = true;
        this.instance.defaults.timeout = 20000;

        const response = await this.instance.post('Login', {
            UserName: process.env.SL_USER,
            Password: process.env.SL_PASS,
            CompanyDB: process.env.SL_COMPANYDB,
            language: process.env.SL_LANGUAGE
        });

        this.instance.defaults.headers.common.Cookie = `B1SESSION=${response.data.SessionId};CompanyDB=${process.env.SL_COMPANYDB}`
        this.sessionTimeout = response.data.SessionTimeout
        this.startSessionTime = moment()
        this.endSessionTime = moment().add(this.sessionTimeout - 1, 'minutes')
        //console.log('Session started at ' + this.startSessionTime.format('DD/MM/YYYY HH:mm:ss') + ' and will end at ' + this.endSessionTime.format('DD/MM/YYYY HH:mm:ss'));

    }

    async refreshSession() {
        //console.log(this.startSessionTime, this.endSessionTime);
        //console.log(moment().isAfter(this.endSessionTime));
        
        if(this.startSessionTime == null || this.endSessionTime == null) {
            //console.log('inciando sessao...');
            await this.startSession()
        }

        if (moment().isAfter(this.endSessionTime)) {
            //console.log('inciando sessao...');
            await this.startSession()
        }
    }

    headersParams(url) {
        const varCount = "$inlinecount=allpages"
        if(this.headers) {
            
            if(this.headers.conditions) {
                let ret = "?" + this.headers.conditions + `&${varCount}`;
                this.headers.conditions = null;
                return ret;
            }else{
                if(url){
                    if(url.includes("(") && url.includes(")")) {
                        return ""
                    }
                    return `?${varCount}`
                }else{
                    return ""
                }
                
            }
        }else{
            return ""
        }
    }

    
    async get(url) {
        try {
            await this.refreshSession()
            const response = await this.instance.get(url + this.headersParams(url));
            
            return {
                status: response.status,
                data: response.data
            }
        } catch (error) {
            if (error.response) {
                return { error: true, message: error.response.data }
            } 
            if (error.request) {
                return { error: true, message: 'ERROR REQUEST' }
            }
            return { error: true, message: error.message }   
        }
    }

    async put(url, data) {
        try {
            await this.refreshSession()
            //console.log(this.instance.defaults.baseURL + url + this.headersParams());
            const response = await this.instance.put(url + this.headersParams(), data)
            return {
                status: response.status,
                data: response.data
            }
        } catch (error) {
            if (error.response) {
                return { error: true, message: error.response.data }
            } 
            if (error.request) {
                return { error: true, message: 'ERROR REQUEST' }
            }
            return { error: true, message: error.message }   
        }
    }

    async post(url, data) {
        try {
            await this.refreshSession()
            //console.log(this.instance.defaults.baseURL + url + this.headersParams());
            const response = await this.instance.post(url + this.headersParams(), data)
            return {
                status: response.status,
                data: response.data
            }
        } catch (error) {
            if (error.response) {
                return { error: true, message: error.response.data }
            } 
            if (error.request) {
                return { error: true, message: 'ERROR REQUEST' }
            }
            return { error: true, message: error.message }   
        }
    }

    async delete(url) {
        try {
            await this.refreshSession()
            const response = await this.instance.delete(url + this.headersParams())
            return {
                status: response.status,
                data: response.data
            }
        } catch (error) {
            if (error.response) {
                return { error: true, message: error.response.data }
            } 
            if (error.request) {
                return { error: true, message: 'ERROR REQUEST' }
            }
            return { error: true, message: error.message }   
        }
    }

    async patch(url, data) {
        try {
            await this.refreshSession()
            //console.log(this.instance.defaults.baseURL + url + this.headersParams());
            const response = await this.instance.patch(url + this.headersParams(), data)
            return {
                status: response.status,
                data: response.data
            }
        } catch (error) {
            if (error.response) {
                return { error: true, message: error.response.data }
            } 
            if (error.request) {
                return { error: true, message: 'ERROR REQUEST' }
            }
            return { error: true, message: error.message }   
        }
    }

}

module.exports = ServiceLayer