import { Router } from 'express';
import { TripRepository } from '../infra/db/pg/trip/tripRepository';
import { TripService } from '../data/services/TripService';
import { TripController } from '../presentation/controllers/TripController';

const router = Router();

const tripRepository = new TripRepository;
const tripService = new TripService(tripRepository);
const tripController  = new TripController(tripService);

router.post('/trips', (req, res) => tripController.create(req, res));

export default router;