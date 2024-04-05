import { EventEmitter, Injectable, Output } from '@angular/core';
import { LocalStorageService } from '@shared/services/local-storage.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrentStepService {
  @Output() sectionEvent: EventEmitter<number> = new EventEmitter();
  private subject = new BehaviorSubject<number>(1);
  private sub = new BehaviorSubject<boolean>(false);
  constructor(private localStorageAS: LocalStorageService) {}

  addRouteNumber(route_number: number) {
    this.subject.next(route_number);
  }

  clearRouteNumber() {
    this.subject.complete();
  }

  getRouteNumber(): Observable<number> {
    return this.subject.asObservable();
  }

  getRouteStatus(): Observable<boolean> {
    return this.sub.asObservable();
  }

  // public storeCurrentStepData(applicationForm: lCApplicationDTO) {
  //   this.localStorageAS.set(
  //     'lc_application_form',
  //     JSON.stringify(applicationForm)
  //   );
  // }

  // public initializeNewForm() {
  //   this.localStorageAS.set(
  //     'lc_application_form',
  //     JSON.stringify(this.initialFormData)
  //   );
  // }

  public clearFormFromStorage() {
    this.localStorageAS.remove('lc_application_form');
  }
}
