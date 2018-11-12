# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities, tables

class GetBackendServiceResult(object):
    """
    A collection of values returned by getBackendService.
    """
    def __init__(__self__, backends=None, cdn_policies=None, connection_draining_timeout_sec=None, custom_request_headers=None, description=None, enable_cdn=None, fingerprint=None, health_checks=None, iaps=None, port_name=None, protocol=None, region=None, security_policy=None, self_link=None, session_affinity=None, timeout_sec=None, id=None):
        if backends and not isinstance(backends, list):
            raise TypeError('Expected argument backends to be a list')
        __self__.backends = backends
        """
        The list of backends that serve this Backend Service.
        """
        if cdn_policies and not isinstance(cdn_policies, list):
            raise TypeError('Expected argument cdn_policies to be a list')
        __self__.cdn_policies = cdn_policies
        if connection_draining_timeout_sec and not isinstance(connection_draining_timeout_sec, int):
            raise TypeError('Expected argument connection_draining_timeout_sec to be a int')
        __self__.connection_draining_timeout_sec = connection_draining_timeout_sec
        """
        Time for which instance will be drained (not accept new connections, but still work to finish started ones).
        """
        if custom_request_headers and not isinstance(custom_request_headers, list):
            raise TypeError('Expected argument custom_request_headers to be a list')
        __self__.custom_request_headers = custom_request_headers
        if description and not isinstance(description, str):
            raise TypeError('Expected argument description to be a str')
        __self__.description = description
        """
        Textual description for the Backend Service.
        """
        if enable_cdn and not isinstance(enable_cdn, bool):
            raise TypeError('Expected argument enable_cdn to be a bool')
        __self__.enable_cdn = enable_cdn
        """
        Whether or not Cloud CDN is enabled on the Backend Service.
        """
        if fingerprint and not isinstance(fingerprint, str):
            raise TypeError('Expected argument fingerprint to be a str')
        __self__.fingerprint = fingerprint
        """
        The fingerprint of the Backend Service.
        """
        if health_checks and not isinstance(health_checks, list):
            raise TypeError('Expected argument health_checks to be a list')
        __self__.health_checks = health_checks
        """
        The list of HTTP/HTTPS health checks used by the Backend Service.
        """
        if iaps and not isinstance(iaps, list):
            raise TypeError('Expected argument iaps to be a list')
        __self__.iaps = iaps
        if port_name and not isinstance(port_name, str):
            raise TypeError('Expected argument port_name to be a str')
        __self__.port_name = port_name
        """
        The name of a service that has been added to an instance group in this backend.
        """
        if protocol and not isinstance(protocol, str):
            raise TypeError('Expected argument protocol to be a str')
        __self__.protocol = protocol
        """
        The protocol for incoming requests.
        """
        if region and not isinstance(region, str):
            raise TypeError('Expected argument region to be a str')
        __self__.region = region
        if security_policy and not isinstance(security_policy, str):
            raise TypeError('Expected argument security_policy to be a str')
        __self__.security_policy = security_policy
        if self_link and not isinstance(self_link, str):
            raise TypeError('Expected argument self_link to be a str')
        __self__.self_link = self_link
        """
        The URI of the Backend Service.
        """
        if session_affinity and not isinstance(session_affinity, str):
            raise TypeError('Expected argument session_affinity to be a str')
        __self__.session_affinity = session_affinity
        """
        The Backend Service session stickyness configuration.
        """
        if timeout_sec and not isinstance(timeout_sec, int):
            raise TypeError('Expected argument timeout_sec to be a int')
        __self__.timeout_sec = timeout_sec
        """
        The number of seconds to wait for a backend to respond to a request before considering the request failed.
        """
        if id and not isinstance(id, str):
            raise TypeError('Expected argument id to be a str')
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_backend_service(name=None, project=None):
    """
    Provide acces to a Backend Service's attribute. For more information
    see [the official documentation](https://cloud.google.com/compute/docs/load-balancing/http/backend-service)
    and the [API](https://cloud.google.com/compute/docs/reference/latest/backendServices).
    """
    __args__ = dict()

    __args__['name'] = name
    __args__['project'] = project
    __ret__ = await pulumi.runtime.invoke('gcp:compute/getBackendService:getBackendService', __args__)

    return GetBackendServiceResult(
        backends=__ret__.get('backends'),
        cdn_policies=__ret__.get('cdnPolicies'),
        connection_draining_timeout_sec=__ret__.get('connectionDrainingTimeoutSec'),
        custom_request_headers=__ret__.get('customRequestHeaders'),
        description=__ret__.get('description'),
        enable_cdn=__ret__.get('enableCdn'),
        fingerprint=__ret__.get('fingerprint'),
        health_checks=__ret__.get('healthChecks'),
        iaps=__ret__.get('iaps'),
        port_name=__ret__.get('portName'),
        protocol=__ret__.get('protocol'),
        region=__ret__.get('region'),
        security_policy=__ret__.get('securityPolicy'),
        self_link=__ret__.get('selfLink'),
        session_affinity=__ret__.get('sessionAffinity'),
        timeout_sec=__ret__.get('timeoutSec'),
        id=__ret__.get('id'))
