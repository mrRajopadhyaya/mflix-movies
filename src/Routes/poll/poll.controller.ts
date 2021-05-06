import { Request, Response, NextFunction, request } from 'express';
import Poll from '../../Database/Poll';

export const getAllPoll = (request: Request, response: Response, next: NextFunction) => {
  console.log('poll api');
};

export const createNewPoll = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const {
      body: { title, options }
    } = request;

    const poll = new Poll({
      title,
      options
    });
    const pollDoc = await poll.save();
    response.status(200).send({ data: pollDoc.toObject() });
  } catch (error) {
    console.log(error);
    response.status(400).send({ error });
  }
};

export const votePoll = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const {
      body: { pollId, optionId, userId }
    } = request;
    console.log(optionId, '@@optionId');
    const poll: any = await Poll.find({ _id: pollId });

    const optionsList = [...poll[0].options];
    const selectedOption: any = poll[0].options.filter((option) => option._id.toString() === optionId);
    if (selectedOption.length) {
      const voterIndex = selectedOption[0].voters.findIndex((voter) => voter._id.toString() === userId);
      console.log(voterIndex, '@@voterIndex');
      let pollDoc;
      if (voterIndex <= -1) {
        console.log('inside voter index if');
        selectedOption[0].voters.push(userId);
        pollDoc = await Poll.findOneAndUpdate({ 'options._id': optionId }, { $push: { 'options.$.voters': userId } });
      }
      response.status(200).send({ data: pollDoc });
    }
  } catch (error) {
    console.log(error);
    response.status(400).send({ error });
  }
};
