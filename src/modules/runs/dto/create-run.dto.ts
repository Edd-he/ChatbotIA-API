import { IsBoolean, IsInt, IsNumber, IsString } from 'class-validator';

export class CreateRunDto {
  @IsString()
  conversation_id: string;

  @IsBoolean()
  is_run_successful: boolean;

  @IsString()
  model_llm: string;

  @IsNumber({ maxDecimalPlaces: 6 })
  latency: number;

  @IsInt()
  tokens: number;

  @IsString()
  input: string;

  @IsString()
  output: string;

  @IsString()
  error?: string;
}
