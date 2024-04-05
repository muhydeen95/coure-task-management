import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import {
  AttachmentRequestDTO,
  PaymentDTO,
  RRRResponse,
  SubmitDTO,
} from '@shared/models/license-application.model';
import {
  NewResponseModel,
  PaginationResponse,
  ResponseModel,
} from 'app/models/response.model';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class LicenceApplicationService {
  constructor(private http: HttpService, private _http: HttpClient) {}

  //APPLICATION

  //Get Applications
  public getApplications(): Observable<
    ResponseModel<PaginationResponse<any[]>>
  > {
    const endpoint = 'LicenseApplication/get-user-license-applications';
    return this.http.getRequest(endpoint);
  }

  //Get Dasboard
  public getDasboard(): Observable<ResponseModel<any>> {
    const endpoint = 'LicenseApplication/get-user-application-summary';
    return this.http.getRequest(endpoint);
  }

  //Submit Application
  public submitApplication(
    submitDTO: SubmitDTO
  ): Observable<NewResponseModel<any>> {
    const endpoint = 'LicenseApplication/submit';
    return this.http.makeRequestWithData('post', endpoint, {}, submitDTO);
  }

  //ATTACHMENT

  public createAttachment(
    attachmentRequestDTO: AttachmentRequestDTO
  ): Observable<any> {
    const formData: FormData = new FormData();
    formData.append(
      'applicationId',
      attachmentRequestDTO.applicationId
    );
    formData.append(
      'applicationDocumentTypeId',
      attachmentRequestDTO.applicationDocumentTypeId
    );
    if (
      attachmentRequestDTO.year !== null &&
      attachmentRequestDTO.year !== undefined
    ) {
      formData.append('year', attachmentRequestDTO.year);
    }
    formData.append('files', attachmentRequestDTO.file);
    const endpoint = 'LicenseApplication/upload-application-document';
    return this._http.post(`${environment.api_url}${endpoint}`, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }

  public removeAttachment(payload: any): Observable<NewResponseModel<any>> {
    const params = new HttpParams().set(
      'applicationDocumentId',
      payload.applicationDocumentId
    );
    const endpoint = 'LicenseApplication/remove-application-document';
    return this.http.makeRequestWithData('post', endpoint, {}, params);
  }

  //REMITA
  public generateRRR(
    applicationId: number
  ): Observable<NewResponseModel<RRRResponse>> {
    const endpoint = 'LicenseApplication/generate-rrr';
    return this.http.makeRequestWithData(
      'post',
      endpoint,
      {},
      { applicationId: applicationId }
    );
  }

  public checkPaymentStatus(
    transId: string
  ): Observable<ResponseModel<PaymentDTO>> {
    const endpoint = 'Payment/checktransaction-status';
    const param = new HttpParams().set('paymentTransactionId', transId);
    return this.http.getRequestWithParams(endpoint, param);
  }
}
