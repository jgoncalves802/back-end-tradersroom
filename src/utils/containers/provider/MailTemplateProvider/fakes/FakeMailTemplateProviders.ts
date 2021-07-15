import IMailTemplateProvider from '../models/IMailTemplateProviders';

class HandleBarsMailTemplateProviders implements IMailTemplateProvider {
  public async parse(): Promise<string>{
   return 'Mail content';
  }
}

export default HandleBarsMailTemplateProviders;