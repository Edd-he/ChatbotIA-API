import { HttpService } from '@nestjs/axios';
import { Injectable, NotFoundException } from '@nestjs/common';
import { IReniecResponse } from './interfaces/reniec-response.interface';
import { lastValueFrom } from 'rxjs';
import { RENIEC_TOKEN } from './constants/api-key';

@Injectable()
export class ReniecService {
  constructor(private readonly http: HttpService) {}

  async getInfoDNI(dni: string): Promise<IReniecResponse> {
    const url = `https://api.apis.net.pe/v2/reniec/dni?numero=${dni}`;
    try {
      const response = await lastValueFrom(
        this.http.get(url, {
          headers: {
            Authorization: `Bearer ${RENIEC_TOKEN}`,
            'Content-Type': 'application/json',
          },
        }),
      );
      return response.data as IReniecResponse;
    } catch (e) {
      console.log(e);
      throw new NotFoundException('El DNI no existe');
    }
  }
}
