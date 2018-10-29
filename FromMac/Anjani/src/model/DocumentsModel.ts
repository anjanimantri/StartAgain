export class DocumentsModel {
    nature: string;
    documents: string;
    applicant: string;
    coApplicant: string;
    constructor(nature: string, documents: string, applicant: string, coApplicant: string) {
        this.nature = nature
        this.documents = documents
        this.applicant = applicant
        this.coApplicant = coApplicant
    }
}