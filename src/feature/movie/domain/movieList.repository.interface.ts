import { ImovieOrdetDto } from "../infrastucture/dto/movieOrder.dto";
import { IMovieOrderResponse } from "./entities/movieOrder.entities";

export interface ImovieRepository{
    getWorkOrderList:(
        params: Partial<ImovieOrdetDto>,
    )=>Promise<IMovieOrderResponse[]>
}