// ===================================================================================================
//                           _  __     _ _
//                          | |/ /__ _| | |_ _  _ _ _ __ _
//                          | ' </ _` | |  _| || | '_/ _` |
//                          |_|\_\__,_|_|\__|\_,_|_| \__,_|
//
// This file is part of the Kaltura Collaborative Media Suite which allows users
// to do with audio, video, and animation what Wiki platfroms allow them to do with
// text.
//
// Copyright (C) 2006-2018  Kaltura Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
// @ignore
// ===================================================================================================

module.exports.AggregationCountOrderBy = {
NONE : 'NONE',
};

module.exports.AnnouncementOrderBy = {
NONE : 'NONE',
};

module.exports.AnnouncementRecipientsType = {
ALL : 'All',
LOGGEDIN : 'LoggedIn',
GUESTS : 'Guests',
OTHER : 'Other',
};

module.exports.AnnouncementStatus = {
NOTSENT : 'NotSent',
SENDING : 'Sending',
SENT : 'Sent',
ABORTED : 'Aborted',
};

module.exports.AssetCommentOrderBy = {
CREATE_DATE_DESC : 'CREATE_DATE_DESC',
};

module.exports.AssetHistoryOrderBy = {
NONE : 'NONE',
};

module.exports.AssetOrderBy = {
RELEVANCY_DESC : 'RELEVANCY_DESC',
NAME_ASC : 'NAME_ASC',
NAME_DESC : 'NAME_DESC',
VIEWS_DESC : 'VIEWS_DESC',
RATINGS_DESC : 'RATINGS_DESC',
VOTES_DESC : 'VOTES_DESC',
START_DATE_DESC : 'START_DATE_DESC',
START_DATE_ASC : 'START_DATE_ASC',
LIKES_DESC : 'LIKES_DESC',
CREATE_DATE_ASC : 'CREATE_DATE_ASC',
CREATE_DATE_DESC : 'CREATE_DATE_DESC',
};

module.exports.AssetReminderOrderBy = {
RELEVANCY_DESC : 'RELEVANCY_DESC',
NAME_ASC : 'NAME_ASC',
NAME_DESC : 'NAME_DESC',
VIEWS_DESC : 'VIEWS_DESC',
RATINGS_DESC : 'RATINGS_DESC',
VOTES_DESC : 'VOTES_DESC',
START_DATE_DESC : 'START_DATE_DESC',
START_DATE_ASC : 'START_DATE_ASC',
LIKES_DESC : 'LIKES_DESC',
};

module.exports.AssetRuleOrderBy = {
NONE : 'NONE',
};

module.exports.AssetStructMetaOrderBy = {
NONE : 'NONE',
};

module.exports.AssetStructOrderBy = {
NAME_ASC : 'NAME_ASC',
NAME_DESC : 'NAME_DESC',
SYSTEM_NAME_ASC : 'SYSTEM_NAME_ASC',
SYSTEM_NAME_DESC : 'SYSTEM_NAME_DESC',
CREATE_DATE_ASC : 'CREATE_DATE_ASC',
CREATE_DATE_DESC : 'CREATE_DATE_DESC',
UPDATE_DATE_ASC : 'UPDATE_DATE_ASC',
UPDATE_DATE_DESC : 'UPDATE_DATE_DESC',
};

module.exports.AssetType = {
MEDIA : 'media',
RECORDING : 'recording',
EPG : 'epg',
};

module.exports.AssetUserRuleOrderBy = {
NONE : 'NONE',
};

module.exports.BatchJobStatus = {
PENDING : 'PENDING',
QUEUED : 'QUEUED',
PROCESSING : 'PROCESSING',
PROCESSED : 'PROCESSED',
MOVEFILE : 'MOVEFILE',
FINISHED : 'FINISHED',
FAILED : 'FAILED',
ABORTED : 'ABORTED',
ALMOST_DONE : 'ALMOST_DONE',
RETRY : 'RETRY',
FATAL : 'FATAL',
DONT_PROCESS : 'DONT_PROCESS',
FINISHED_PARTIALLY : 'FINISHED_PARTIALLY',
};

module.exports.BillingAction = {
UNKNOWN : 'unknown',
PURCHASE : 'purchase',
RENEW_PAYMENT : 'renew_payment',
RENEW_CANCELED_SUBSCRIPTION : 'renew_canceled_subscription',
CANCEL_SUBSCRIPTION_ORDER : 'cancel_subscription_order',
SUBSCRIPTION_DATE_CHANGED : 'subscription_date_changed',
};

module.exports.BillingItemsType = {
UNKNOWN : 'unknown',
PPV : 'ppv',
SUBSCRIPTION : 'subscription',
PRE_PAID : 'pre_paid',
PRE_PAID_EXPIRED : 'pre_paid_expired',
COLLECTION : 'collection',
};

module.exports.BillingPriceType = {
FULLPERIOD : 'FullPeriod',
PARTIALPERIOD : 'PartialPeriod',
};

module.exports.BookmarkActionType = {
HIT : 'HIT',
PLAY : 'PLAY',
STOP : 'STOP',
PAUSE : 'PAUSE',
FIRST_PLAY : 'FIRST_PLAY',
SWOOSH : 'SWOOSH',
FULL_SCREEN : 'FULL_SCREEN',
SEND_TO_FRIEND : 'SEND_TO_FRIEND',
LOAD : 'LOAD',
FULL_SCREEN_EXIT : 'FULL_SCREEN_EXIT',
FINISH : 'FINISH',
ERROR : 'ERROR',
BITRATE_CHANGE : 'BITRATE_CHANGE',
NONE : 'NONE',
};

module.exports.BookmarkOrderBy = {
POSITION_ASC : 'POSITION_ASC',
POSITION_DESC : 'POSITION_DESC',
};

module.exports.BulkOrderBy = {
NONE : 'NONE',
};

module.exports.BundleType = {
SUBSCRIPTION : 'subscription',
COLLECTION : 'collection',
};

module.exports.ChannelEnrichment = {
CLIENTLOCATION : 'ClientLocation',
USERID : 'UserId',
HOUSEHOLDID : 'HouseholdId',
DEVICEID : 'DeviceId',
DEVICETYPE : 'DeviceType',
UTCOFFSET : 'UTCOffset',
LANGUAGE : 'Language',
NPVRSUPPORT : 'NPVRSupport',
CATCHUP : 'Catchup',
PARENTAL : 'Parental',
DTTREGION : 'DTTRegion',
ATHOME : 'AtHome',
};

module.exports.ChannelOrderBy = {
ORDER_NUM : 'ORDER_NUM',
RELEVANCY_DESC : 'RELEVANCY_DESC',
NAME_ASC : 'NAME_ASC',
NAME_DESC : 'NAME_DESC',
VIEWS_DESC : 'VIEWS_DESC',
RATINGS_DESC : 'RATINGS_DESC',
VOTES_DESC : 'VOTES_DESC',
START_DATE_DESC : 'START_DATE_DESC',
START_DATE_ASC : 'START_DATE_ASC',
LIKES_DESC : 'LIKES_DESC',
CREATE_DATE_ASC : 'CREATE_DATE_ASC',
CREATE_DATE_DESC : 'CREATE_DATE_DESC',
};

module.exports.ChannelsOrderBy = {
NONE : 'NONE',
NAME_ASC : 'NAME_ASC',
NAME_DESC : 'NAME_DESC',
CREATE_DATE_ASC : 'CREATE_DATE_ASC',
CREATE_DATE_DESC : 'CREATE_DATE_DESC',
};

module.exports.CollectionOrderBy = {
NONE : 'NONE',
};

module.exports.ConcurrencyLimitationType = {
SINGLE : 'Single',
GROUP : 'Group',
};

module.exports.ConfigurationGroupDeviceOrderBy = {
NONE : 'NONE',
};

module.exports.ConfigurationGroupTagOrderBy = {
NONE : 'NONE',
};

module.exports.ConfigurationsOrderBy = {
NONE : 'NONE',
};

module.exports.CountryOrderBy = {
NAME_ASC : 'NAME_ASC',
};

module.exports.CouponGroupType = {
COUPON : 'COUPON',
GIFT_CARD : 'GIFT_CARD',
};

module.exports.CurrencyOrderBy = {
NAME_ASC : 'NAME_ASC',
NAME_DESC : 'NAME_DESC',
CODE_ASC : 'CODE_ASC',
CODE_DESC : 'CODE_DESC',
};

module.exports.DeviceStatus = {
PENDING : 'PENDING',
ACTIVATED : 'ACTIVATED',
NOT_ACTIVATED : 'NOT_ACTIVATED',
};

module.exports.DrmSchemeName = {
PLAYREADY_CENC : 'PLAYREADY_CENC',
WIDEVINE_CENC : 'WIDEVINE_CENC',
FAIRPLAY : 'FAIRPLAY',
WIDEVINE : 'WIDEVINE',
PLAYREADY : 'PLAYREADY',
CUSTOM_DRM : 'CUSTOM_DRM',
};

module.exports.EngagementOrderBy = {
NONE : 'NONE',
};

module.exports.EngagementType = {
CHURN : 'Churn',
};

module.exports.EntitlementOrderBy = {
PURCHASE_DATE_ASC : 'PURCHASE_DATE_ASC',
PURCHASE_DATE_DESC : 'PURCHASE_DATE_DESC',
};

module.exports.EntityReferenceBy = {
USER : 'user',
HOUSEHOLD : 'household',
};

module.exports.EvictionPolicyType = {
FIFO : 'FIFO',
LIFO : 'LIFO',
};

module.exports.ExportDataType = {
VOD : 'vod',
EPG : 'epg',
USERS : 'users',
};

module.exports.ExportTaskOrderBy = {
CREATE_DATE_ASC : 'CREATE_DATE_ASC',
CREATE_DATE_DESC : 'CREATE_DATE_DESC',
};

module.exports.ExportType = {
FULL : 'full',
INCREMENTAL : 'incremental',
};

module.exports.FavoriteOrderBy = {
CREATE_DATE_ASC : 'CREATE_DATE_ASC',
CREATE_DATE_DESC : 'CREATE_DATE_DESC',
};

module.exports.FollowTvSeriesOrderBy = {
START_DATE_DESC : 'START_DATE_DESC',
START_DATE_ASC : 'START_DATE_ASC',
};

module.exports.GroupByField = {
MEDIA_TYPE_ID : 'media_type_id',
};

module.exports.HouseholdDeviceOrderBy = {
NONE : 'NONE',
};

module.exports.HouseholdPaymentGatewaySelectedBy = {
NONE : 'none',
ACCOUNT : 'account',
HOUSEHOLD : 'household',
};

module.exports.HouseholdSuspensionState = {
NOT_SUSPENDED : 'NOT_SUSPENDED',
SUSPENDED : 'SUSPENDED',
};

module.exports.HouseholdUserOrderBy = {
NONE : 'NONE',
};

module.exports.HouseholdUserStatus = {
OK : 'OK',
PENDING : 'PENDING',
};

module.exports.ImageObjectType = {
MEDIA_ASSET : 'MEDIA_ASSET',
PROGRAM_ASSET : 'PROGRAM_ASSET',
CHANNEL : 'CHANNEL',
CATEGORY : 'CATEGORY',
PARTNER : 'PARTNER',
IMAGE_TYPE : 'IMAGE_TYPE',
};

module.exports.ImageOrderBy = {
NONE : 'NONE',
};

module.exports.ImageStatus = {
PENDING : 'PENDING',
READY : 'READY',
FAILED : 'FAILED',
};

module.exports.ImageTypeOrderBy = {
NONE : 'NONE',
};

module.exports.InboxMessageOrderBy = {
NONE : 'NONE',
};

module.exports.InboxMessageStatus = {
UNREAD : 'Unread',
READ : 'Read',
DELETED : 'Deleted',
};

module.exports.InboxMessageType = {
SYSTEMANNOUNCEMENT : 'SystemAnnouncement',
FOLLOWED : 'Followed',
ENGAGEMENT : 'Engagement',
INTEREST : 'Interest',
};

module.exports.LanguageOrderBy = {
SYSTEM_NAME_ASC : 'SYSTEM_NAME_ASC',
SYSTEM_NAME_DESC : 'SYSTEM_NAME_DESC',
CODE_ASC : 'CODE_ASC',
CODE_DESC : 'CODE_DESC',
};

module.exports.LinearChannelType = {
UNKNOWN : 'UNKNOWN',
DTT : 'DTT',
OTT : 'OTT',
DTT_AND_OTT : 'DTT_AND_OTT',
};

module.exports.MediaFileOrderBy = {
NONE : 'NONE',
};

module.exports.MediaFileStreamerType = {
APPLE_HTTP : 'APPLE_HTTP',
MPEG_DASH : 'MPEG_DASH',
URL : 'URL',
SMOOTH_STREAMING : 'SMOOTH_STREAMING',
};

module.exports.MediaFileTypeQuality = {
ADAPTIVE : 'ADAPTIVE',
SD : 'SD',
HD_720 : 'HD_720',
HD_1080 : 'HD_1080',
UHD_4K : 'UHD_4K',
};

module.exports.MetaDataType = {
STRING : 'STRING',
MULTILINGUAL_STRING : 'MULTILINGUAL_STRING',
NUMBER : 'NUMBER',
BOOLEAN : 'BOOLEAN',
DATE : 'DATE',
};

module.exports.MetaOrderBy = {
NAME_ASC : 'NAME_ASC',
NAME_DESC : 'NAME_DESC',
SYSTEM_NAME_ASC : 'SYSTEM_NAME_ASC',
SYSTEM_NAME_DESC : 'SYSTEM_NAME_DESC',
CREATE_DATE_ASC : 'CREATE_DATE_ASC',
CREATE_DATE_DESC : 'CREATE_DATE_DESC',
UPDATE_DATE_ASC : 'UPDATE_DATE_ASC',
UPDATE_DATE_DESC : 'UPDATE_DATE_DESC',
};

module.exports.MetaTagOrderBy = {
META_ASC : 'META_ASC',
META_DESC : 'META_DESC',
};

module.exports.OTTUserOrderBy = {
NONE : 'NONE',
};

module.exports.ParentalRuleOrderBy = {
PARTNER_SORT_VALUE : 'PARTNER_SORT_VALUE',
};

module.exports.ParentalRuleType = {
ALL : 'ALL',
MOVIES : 'MOVIES',
TV_SERIES : 'TV_SERIES',
};

module.exports.PartnerConfigurationOrderBy = {
NONE : 'NONE',
};

module.exports.PartnerConfigurationType = {
DEFAULTPAYMENTGATEWAY : 'DefaultPaymentGateway',
ENABLEPAYMENTGATEWAYSELECTION : 'EnablePaymentGatewaySelection',
OSSADAPTER : 'OSSAdapter',
CONCURRENCY : 'Concurrency',
};

module.exports.PaymentMethodProfileOrderBy = {
NONE : 'NONE',
};

module.exports.PaymentMethodType = {
UNKNOWN : 'unknown',
CREDIT_CARD : 'credit_card',
SMS : 'sms',
PAY_PAL : 'pay_pal',
DEBIT_CARD : 'debit_card',
IDEAL : 'ideal',
INCASO : 'incaso',
GIFT : 'gift',
VISA : 'visa',
MASTER_CARD : 'master_card',
IN_APP : 'in_app',
M1 : 'm1',
CHANGE_SUBSCRIPTION : 'change_subscription',
OFFLINE : 'offline',
};

module.exports.PersonalFeedOrderBy = {
RELEVANCY_DESC : 'RELEVANCY_DESC',
NAME_ASC : 'NAME_ASC',
NAME_DESC : 'NAME_DESC',
VIEWS_DESC : 'VIEWS_DESC',
RATINGS_DESC : 'RATINGS_DESC',
VOTES_DESC : 'VOTES_DESC',
START_DATE_DESC : 'START_DATE_DESC',
START_DATE_ASC : 'START_DATE_ASC',
};

module.exports.PersonalListOrderBy = {
CREATE_DATE_DESC : 'CREATE_DATE_DESC',
CREATE_DATE_ASC : 'CREATE_DATE_ASC',
};

module.exports.Platform = {
ANDROID : 'Android',
IOS : 'iOS',
WINDOWSPHONE : 'WindowsPhone',
BLACKBERRY : 'Blackberry',
STB : 'STB',
CTV : 'CTV',
OTHER : 'Other',
};

module.exports.PositionOwner = {
HOUSEHOLD : 'household',
USER : 'user',
};

module.exports.PriceDetailsOrderBy = {
NAME_ASC : 'NAME_ASC',
};

module.exports.PricePlanOrderBy = {
CREATE_DATE_DESC : 'CREATE_DATE_DESC',
};

module.exports.ProductPriceOrderBy = {
PRODUCT_ID_ASC : 'PRODUCT_ID_ASC',
PRODUCT_ID_DESC : 'PRODUCT_ID_DESC',
};

module.exports.PurchaseStatus = {
PPV_PURCHASED : 'ppv_purchased',
FREE : 'free',
FOR_PURCHASE_SUBSCRIPTION_ONLY : 'for_purchase_subscription_only',
SUBSCRIPTION_PURCHASED : 'subscription_purchased',
FOR_PURCHASE : 'for_purchase',
SUBSCRIPTION_PURCHASED_WRONG_CURRENCY : 'subscription_purchased_wrong_currency',
PRE_PAID_PURCHASED : 'pre_paid_purchased',
GEO_COMMERCE_BLOCKED : 'geo_commerce_blocked',
ENTITLED_TO_PREVIEW_MODULE : 'entitled_to_preview_module',
FIRST_DEVICE_LIMITATION : 'first_device_limitation',
COLLECTION_PURCHASED : 'collection_purchased',
USER_SUSPENDED : 'user_suspended',
NOT_FOR_PURCHASE : 'not_for_purchase',
INVALID_CURRENCY : 'invalid_currency',
CURRENCY_NOT_DEFINED_ON_PRICE_CODE : 'currency_not_defined_on_price_code',
};

module.exports.RecordingContextOrderBy = {
NONE : 'NONE',
};

module.exports.RecordingOrderBy = {
TITLE_ASC : 'TITLE_ASC',
TITLE_DESC : 'TITLE_DESC',
START_DATE_ASC : 'START_DATE_ASC',
START_DATE_DESC : 'START_DATE_DESC',
};

module.exports.RecordingStatus = {
SCHEDULED : 'SCHEDULED',
RECORDING : 'RECORDING',
RECORDED : 'RECORDED',
CANCELED : 'CANCELED',
FAILED : 'FAILED',
DELETED : 'DELETED',
};

module.exports.RecordingType = {
SINGLE : 'SINGLE',
SEASON : 'SEASON',
SERIES : 'SERIES',
};

module.exports.RegionOrderBy = {
CREATE_DATE_ASC : 'CREATE_DATE_ASC',
CREATE_DATE_DESC : 'CREATE_DATE_DESC',
};

module.exports.ReminderType = {
ASSET : 'ASSET',
SERIES : 'SERIES',
};

module.exports.ReportOrderBy = {
NONE : 'NONE',
};

module.exports.RuleActionType = {
BLOCK : 'BLOCK',
START_DATE_OFFSET : 'START_DATE_OFFSET',
END_DATE_OFFSET : 'END_DATE_OFFSET',
USER_BLOCK : 'USER_BLOCK',
};

module.exports.RuleConditionType = {
ASSET : 'ASSET',
COUNTRY : 'COUNTRY',
CONCURRENCY : 'CONCURRENCY',
};

module.exports.RuleLevel = {
INVALID : 'invalid',
USER : 'user',
HOUSEHOLD : 'household',
ACCOUNT : 'account',
};

module.exports.RuleType = {
PARENTAL : 'parental',
GEO : 'geo',
USER_TYPE : 'user_type',
DEVICE : 'device',
ASSETUSER : 'assetUser',
};

module.exports.ScheduledRecordingAssetType = {
SINGLE : 'single',
SERIES : 'series',
ALL : 'all',
};

module.exports.SearchHistoryOrderBy = {
NONE : 'NONE',
};

module.exports.SeriesRecordingOrderBy = {
START_DATE_ASC : 'START_DATE_ASC',
START_DATE_DESC : 'START_DATE_DESC',
ID_ASC : 'ID_ASC',
ID_DESC : 'ID_DESC',
SERIES_ID_ASC : 'SERIES_ID_ASC',
SERIES_ID_DESC : 'SERIES_ID_DESC',
};

module.exports.SeriesReminderOrderBy = {
NONE : 'NONE',
};

module.exports.SocialActionOrderBy = {
NONE : 'NONE',
};

module.exports.SocialActionType = {
LIKE : 'LIKE',
WATCH : 'WATCH',
RATE : 'RATE',
SHARE : 'SHARE',
};

module.exports.SocialCommentOrderBy = {
CREATE_DATE_ASC : 'CREATE_DATE_ASC',
CREATE_DATE_DESC : 'CREATE_DATE_DESC',
};

module.exports.SocialFriendActivityOrderBy = {
NONE : 'NONE',
UPDATE_DATE_DESC : 'UPDATE_DATE_DESC',
};

module.exports.SocialPlatform = {
IN_APP : 'IN_APP',
FACEBOOK : 'FACEBOOK',
TWITTER : 'TWITTER',
};

module.exports.SubscriptionDependencyType = {
NOTAPPLICABLE : 'NOTAPPLICABLE',
BASE : 'BASE',
ADDON : 'ADDON',
};

module.exports.SubscriptionOrderBy = {
START_DATE_ASC : 'START_DATE_ASC',
START_DATE_DESC : 'START_DATE_DESC',
};

module.exports.SubscriptionSetOrderBy = {
NAME_ASC : 'NAME_ASC',
NAME_DESC : 'NAME_DESC',
};

module.exports.SubscriptionSetType = {
SWITCH : 'SWITCH',
DEPENDENCY : 'DEPENDENCY',
};

module.exports.TagOrderBy = {
NONE : 'NONE',
};

module.exports.TimeShiftedTvState = {
INHERITED : 'INHERITED',
ENABLED : 'ENABLED',
DISABLED : 'DISABLED',
};

module.exports.TopicAutomaticIssueNotification = {
INHERIT : 'Inherit',
YES : 'Yes',
NO : 'No',
};

module.exports.TopicOrderBy = {
NONE : 'NONE',
};

module.exports.TransactionHistoryOrderBy = {
CREATE_DATE_ASC : 'CREATE_DATE_ASC',
CREATE_DATE_DESC : 'CREATE_DATE_DESC',
};

module.exports.TransactionType = {
PPV : 'ppv',
SUBSCRIPTION : 'subscription',
COLLECTION : 'collection',
};

module.exports.UserAssetRuleOrderBy = {
NAME_ASC : 'NAME_ASC',
NAME_DESC : 'NAME_DESC',
};

module.exports.UserRoleOrderBy = {
NONE : 'NONE',
};

module.exports.UserState = {
OK : 'ok',
USER_WITH_NO_HOUSEHOLD : 'user_with_no_household',
USER_CREATED_WITH_NO_ROLE : 'user_created_with_no_role',
USER_NOT_ACTIVATED : 'user_not_activated',
};

module.exports.WatchStatus = {
PROGRESS : 'progress',
DONE : 'done',
ALL : 'all',
};
