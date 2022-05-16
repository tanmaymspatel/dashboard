/**
 * @author Tanmay Patel
 */

 export class Pharmacy {
    public email: string;
    public id: number;
    public name: string;
    public establishmentDate: string;
    public mobileNumber: string;
    public address: string;
    public certificate: string;
    public pharmacistDegreeCertificate: string;
    public city:string;

    constructor(
        email: string,
        id:number,
        name: string,
        establishmentDate: string,
        mobileNumber: string,
        address: string,
        certificate: string,
        pharmacistDegreeCertificate: string,
        city:string
        ) {
        this.email = email;
        this.id = id;
        this.name = name;
        this.establishmentDate = establishmentDate;
        this.mobileNumber = mobileNumber;
        this.address = address;
        this.certificate = certificate;
        this.pharmacistDegreeCertificate = pharmacistDegreeCertificate;
        this.city = city;
    }
}