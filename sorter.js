function getMainDomain(domain) {
  const parts = domain.split('.');
  if (parts.length > 2) {
    return parts.slice(-2).join('.');
  }
  return domain;
}

function sortDomains(domains) {
  return domains.sort((a, b) => {
    const mainDomainA = getMainDomain(a);
    const mainDomainB = getMainDomain(b);
    if (mainDomainA < mainDomainB) return -1;
    if (mainDomainA > mainDomainB) return 1;
    return 0;
  });
}

function sortAndDisplayDomains() {
  const input = document.getElementById('domainInputSorter').value;
  const domains = input.split('\n').map(domain => domain.trim()).filter(domain => domain);
  const sortedDomains = sortDomains(domains);
  document.getElementById('sortedDomains').innerText = sortedDomains.join('\n');
}