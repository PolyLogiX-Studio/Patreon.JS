const HTTP_CLIENT = require("./HTTP_CLIENT")
class PatreonClient {
  static SAFE_ROOT = "https://www.patreon.com/api/oauth2/api/";
  static PUBLIC_ROOT = "https://www.patreon.com/api/";

  static CampaignURL = (campaignId) => this.SAFE_ROOT + "campaigns/" + campaignId + "/";
  static PublicCampaignURL = (campaignId) => this.PUBLIC_ROOT + "campaigns/" + campaignId + "/";
  static PledgesURL = (campaignId) => this.CampaignURL(campaignId) + "pledges";

  static UserURL = (userId) => this.PUBLIC_ROOT + "user/" + userId

  static PLEDGE_FIELDS = "fields%5bpledge%5D=amount_cents,created_at,declined_since,pledge_cap_cents,patreon_pays_fees,total_historical_amount_cents,is_paused,has_shipping_address";

  httpClient = new HTTP_CLIENT()


}
module.exports = PatreonClient