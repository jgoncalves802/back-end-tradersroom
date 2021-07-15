import { container } from 'tsyringe';

import IMailProvider from './provider/MailProvider/models/IMailProvider';
import EtherealMailProvider from './provider/MailProvider/implementations/EtherealMailProvider';

import IMailTemplateProvider from './provider/MailTemplateProvider/models/IMailTemplateProviders';
import HandlebarsMailTemplateProvider from './provider/MailTemplateProvider/implementations/HandleMailTemplateProvider';

container.registerInstance<IMailProvider>(
  'MailProvider',
  container.resolve(EtherealMailProvider),
);
container.registerSingleton<IMailTemplateProvider>(
  'MailTemplateProvider', HandlebarsMailTemplateProvider,
);