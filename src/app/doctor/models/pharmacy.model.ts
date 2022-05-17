/**
 * @author Tanmay Patel
 */


 export class PharmacyList{
    public name: string;
    public mobileNumber: string;
    public city: string;
    public state: string;

    constructor(
        name: string,
        mobileNumber:string,
        city: string,
        state: string
    ){
        this.name = name;
        this.mobileNumber = mobileNumber;
        this.city = city;
        this.state = state;
    }
}
 export class Pharmacy {
    public email: string;
    public name: string;
    public establishmentDate: string;
    public mobileNumber: string;
    public address: string;
    public certificate: string;
    public pharmacistDegreeCertificate: string;
    public city:string;
    public state:string;

    constructor(
        email: string,
        name: string,
        establishmentDate: string,
        mobileNumber: string,
        address: string,
        certificate: string,
        pharmacistDegreeCertificate: string,
        city:string,
        state:string
        ) {
        this.email = email;
        this.name = name;
        this.establishmentDate = establishmentDate;
        this.mobileNumber = mobileNumber;
        this.address = address;
        this.certificate = certificate;
        this.pharmacistDegreeCertificate = pharmacistDegreeCertificate;
        this.city = city;
        this.state = state;
    }
}