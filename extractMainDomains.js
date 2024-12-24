function getMainDomain(domain) {
  const parts = domain.split('.');
  if (parts.length > 2) {
    return parts.slice(-2).join('.');
  }
  return domain;
}

function extractMainDomains(domains) {
  const mainDomains = new Set();
  domains.forEach(domain => {
    mainDomains.add(getMainDomain(domain));
  });
  return Array.from(mainDomains);
}

function extractAndDisplayMainDomains() {
  const input = document.getElementById('domainInputExtractor').value;
  const domains = input.split('\n').map(domain => domain.trim()).filter(domain => domain);
  const mainDomains = extractMainDomains(domains);
  document.getElementById('mainDomains').innerText = mainDomains.join('\n');
}